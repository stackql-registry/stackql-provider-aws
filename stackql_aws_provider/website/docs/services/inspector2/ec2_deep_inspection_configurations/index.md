--- 
title: ec2_deep_inspection_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - ec2_deep_inspection_configurations
  - inspector2
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

Creates, updates, deletes, gets or lists an <code>ec2_deep_inspection_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ec2_deep_inspection_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.ec2_deep_inspection_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ec2_deep_inspection_configuration"
    values={[
        { label: 'get_ec2_deep_inspection_configuration', value: 'get_ec2_deep_inspection_configuration' }
    ]}
>
<TabItem value="get_ec2_deep_inspection_configuration">

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
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>An error message explaining why Amazon Inspector deep inspection configurations could not be retrieved for your account.</td>
</tr>
<tr>
    <td><CopyableCode code="org_package_paths" /></td>
    <td><code>array</code></td>
    <td>The Amazon Inspector deep inspection custom paths for your organization.</td>
</tr>
<tr>
    <td><CopyableCode code="package_paths" /></td>
    <td><code>array</code></td>
    <td>The Amazon Inspector deep inspection custom paths for your account.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The activation status of Amazon Inspector deep inspection in your account. (ACTIVATED, DEACTIVATED, PENDING, FAILED)</td>
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
    <td><a href="#get_ec2_deep_inspection_configuration"><CopyableCode code="get_ec2_deep_inspection_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the activation status of Amazon Inspector deep inspection and custom paths associated with your account.</td>
</tr>
<tr>
    <td><a href="#update_org_ec2_deep_inspection_configuration"><CopyableCode code="update_org_ec2_deep_inspection_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-orgPackagePaths"><code>orgPackagePaths</code></a></td>
    <td></td>
    <td>Updates the Amazon Inspector deep inspection custom paths for your organization. You must be an Amazon Inspector delegated administrator to use this API.</td>
</tr>
<tr>
    <td><a href="#update_ec2_deep_inspection_configuration"><CopyableCode code="update_ec2_deep_inspection_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Activates, deactivates Amazon Inspector deep inspection, or updates custom paths for your account.</td>
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
    defaultValue="get_ec2_deep_inspection_configuration"
    values={[
        { label: 'get_ec2_deep_inspection_configuration', value: 'get_ec2_deep_inspection_configuration' }
    ]}
>
<TabItem value="get_ec2_deep_inspection_configuration">

Retrieves the activation status of Amazon Inspector deep inspection and custom paths associated with your account.

```sql
SELECT
error_message,
org_package_paths,
package_paths,
status
FROM aws.inspector2.ec2_deep_inspection_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_org_ec2_deep_inspection_configuration"
    values={[
        { label: 'update_org_ec2_deep_inspection_configuration', value: 'update_org_ec2_deep_inspection_configuration' },
        { label: 'update_ec2_deep_inspection_configuration', value: 'update_ec2_deep_inspection_configuration' }
    ]}
>
<TabItem value="update_org_ec2_deep_inspection_configuration">

Updates the Amazon Inspector deep inspection custom paths for your organization. You must be an Amazon Inspector delegated administrator to use this API.

```sql
UPDATE aws.inspector2.ec2_deep_inspection_configurations
SET 
orgPackagePaths = '{{ orgPackagePaths }}'
WHERE 
region = '{{ region }}' --required
AND orgPackagePaths = '{{ orgPackagePaths }}' --required;
```
</TabItem>
<TabItem value="update_ec2_deep_inspection_configuration">

Activates, deactivates Amazon Inspector deep inspection, or updates custom paths for your account.

```sql
UPDATE aws.inspector2.ec2_deep_inspection_configurations
SET 
activateDeepInspection = {{ activateDeepInspection }},
packagePaths = '{{ packagePaths }}'
WHERE 
region = '{{ region }}' --required
RETURNING
error_message,
org_package_paths,
package_paths,
status;
```
</TabItem>
</Tabs>
