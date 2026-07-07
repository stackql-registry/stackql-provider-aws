--- 
title: app_version_resource_mappings
hide_title: false
hide_table_of_contents: false
keywords:
  - app_version_resource_mappings
  - resiliencehub
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>app_version_resource_mappings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_version_resource_mappings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehub.app_version_resource_mappings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_app_version_resource_mappings"
    values={[
        { label: 'list_app_version_resource_mappings', value: 'list_app_version_resource_mappings' }
    ]}
>
<TabItem value="list_app_version_resource_mappings">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Token for the next set of results, or null if there are no more results. (pattern: &lt;code&gt;^\S&#123;1,2000&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceMappings" /></td>
    <td><code>array</code></td>
    <td>Mappings used to map logical resources from the template to physical resources. You can use the mapping type CFN_STACK if the application template uses a logical stack name. Or you can map individual resources by using the mapping type RESOURCE. We recommend using the mapping type CFN_STACK if the application is backed by a CloudFormation stack.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#list_app_version_resource_mappings"><CopyableCode code="list_app_version_resource_mappings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists how the resources in an application version are mapped/sourced from. Mappings can be physical resource identifiers, CloudFormation stacks, resource-groups, or an application registry app.</td>
</tr>
<tr>
    <td><a href="#add_draft_app_version_resource_mappings"><CopyableCode code="add_draft_app_version_resource_mappings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-appArn"><code>appArn</code></a>, <a href="#parameter-resourceMappings"><code>resourceMappings</code></a></td>
    <td></td>
    <td>Adds the source of resource-maps to the draft version of an application. During assessment, Resilience Hub will use these resource-maps to resolve the latest physical ID for each resource in the application template. For more information about different types of resources supported by Resilience Hub and how to add them in your application, see Step 2: How is your application managed? in the Resilience Hub User Guide.</td>
</tr>
<tr>
    <td><a href="#remove_draft_app_version_resource_mappings"><CopyableCode code="remove_draft_app_version_resource_mappings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-appArn"><code>appArn</code></a></td>
    <td></td>
    <td>Removes resource mappings from a draft application version.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_app_version_resource_mappings"
    values={[
        { label: 'list_app_version_resource_mappings', value: 'list_app_version_resource_mappings' }
    ]}
>
<TabItem value="list_app_version_resource_mappings">

Lists how the resources in an application version are mapped/sourced from. Mappings can be physical resource identifiers, CloudFormation stacks, resource-groups, or an application registry app.

```sql
SELECT
nextToken,
resourceMappings
FROM aws.resiliencehub.app_version_resource_mappings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_draft_app_version_resource_mappings"
    values={[
        { label: 'add_draft_app_version_resource_mappings', value: 'add_draft_app_version_resource_mappings' },
        { label: 'remove_draft_app_version_resource_mappings', value: 'remove_draft_app_version_resource_mappings' }
    ]}
>
<TabItem value="add_draft_app_version_resource_mappings">

Adds the source of resource-maps to the draft version of an application. During assessment, Resilience Hub will use these resource-maps to resolve the latest physical ID for each resource in the application template. For more information about different types of resources supported by Resilience Hub and how to add them in your application, see Step 2: How is your application managed? in the Resilience Hub User Guide.

```sql
UPDATE aws.resiliencehub.app_version_resource_mappings
SET 
appArn = '{{ appArn }}',
resourceMappings = '{{ resourceMappings }}'
WHERE 
region = '{{ region }}' --required
AND appArn = '{{ appArn }}' --required
AND resourceMappings = '{{ resourceMappings }}' --required
RETURNING
appArn,
appVersion,
resourceMappings;
```
</TabItem>
<TabItem value="remove_draft_app_version_resource_mappings">

Removes resource mappings from a draft application version.

```sql
UPDATE aws.resiliencehub.app_version_resource_mappings
SET 
appArn = '{{ appArn }}',
appRegistryAppNames = '{{ appRegistryAppNames }}',
eksSourceNames = '{{ eksSourceNames }}',
logicalStackNames = '{{ logicalStackNames }}',
resourceGroupNames = '{{ resourceGroupNames }}',
resourceNames = '{{ resourceNames }}',
terraformSourceNames = '{{ terraformSourceNames }}'
WHERE 
region = '{{ region }}' --required
AND appArn = '{{ appArn }}' --required
RETURNING
appArn,
appVersion;
```
</TabItem>
</Tabs>
