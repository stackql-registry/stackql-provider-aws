--- 
title: service_access_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - service_access_policies
  - cloudsearch
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

Creates, updates, deletes, gets or lists a <code>service_access_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_access_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudsearch.service_access_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_service_access_policies"
    values={[
        { label: 'describe_service_access_policies', value: 'describe_service_access_policies' }
    ]}
>
<TabItem value="describe_service_access_policies">

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
    <td><CopyableCode code="options" /></td>
    <td><code>string</code></td>
    <td>Access rules for a domain's document or search service endpoints. For more information, see Configuring Access for a Search Domain in the Amazon CloudSearch Developer Guide. The maximum size of a policy document is 100 KB.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of domain configuration option.</td>
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
    <td><a href="#describe_service_access_policies"><CopyableCode code="describe_service_access_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Deployed"><code>Deployed</code></a></td>
    <td>Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the Deployed option to true to show the active configuration and exclude pending changes. For more information, see Configuring Access for a Search Domain in the Amazon CloudSearch Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_service_access_policies"><CopyableCode code="update_service_access_policies" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-AccessPolicies"><code>AccessPolicies</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Configures the access rules that control access to the domain's document and search endpoints. For more information, see Configuring Access for an Amazon CloudSearch Domain.</td>
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
<tr id="parameter-AccessPolicies">
    <td><CopyableCode code="AccessPolicies" /></td>
    <td><code>string</code></td>
    <td>The access rules you want to configure. These rules replace any existing rules.</td>
</tr>
<tr id="parameter-DomainName">
    <td><CopyableCode code="DomainName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Deployed">
    <td><CopyableCode code="Deployed" /></td>
    <td><code>boolean</code></td>
    <td>Whether to display the deployed configuration (true) or include any pending changes (false). Defaults to false.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_service_access_policies"
    values={[
        { label: 'describe_service_access_policies', value: 'describe_service_access_policies' }
    ]}
>
<TabItem value="describe_service_access_policies">

Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the Deployed option to true to show the active configuration and exclude pending changes. For more information, see Configuring Access for a Search Domain in the Amazon CloudSearch Developer Guide.

```sql
SELECT
options,
status
FROM aws.cloudsearch.service_access_policies
WHERE DomainName = '{{ DomainName }}' -- required
AND region = '{{ region }}' -- required
AND Deployed = '{{ Deployed }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_service_access_policies"
    values={[
        { label: 'update_service_access_policies', value: 'update_service_access_policies' }
    ]}
>
<TabItem value="update_service_access_policies">

Configures the access rules that control access to the domain's document and search endpoints. For more information, see Configuring Access for an Amazon CloudSearch Domain.

```sql
UPDATE aws.cloudsearch.service_access_policies
SET 
-- No updatable properties
WHERE 
DomainName = '{{ DomainName }}' --required
AND AccessPolicies = '{{ AccessPolicies }}' --required
AND region = '{{ region }}' --required
RETURNING
options,
status;
```
</TabItem>
</Tabs>
