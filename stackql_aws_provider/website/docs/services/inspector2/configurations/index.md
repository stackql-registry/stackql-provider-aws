--- 
title: configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - configurations
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

Creates, updates, deletes, gets or lists a <code>configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_configuration"
    values={[
        { label: 'get_configuration', value: 'get_configuration' }
    ]}
>
<TabItem value="get_configuration">

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
    <td><CopyableCode code="ec2Configuration" /></td>
    <td><code>object</code></td>
    <td>Specifies how the Amazon EC2 automated scan mode is currently configured for your environment.</td>
</tr>
<tr>
    <td><CopyableCode code="ecrConfiguration" /></td>
    <td><code>object</code></td>
    <td>Specifies how the ECR automated re-scan duration is currently configured for your environment.</td>
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
    <td><a href="#get_configuration"><CopyableCode code="get_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves setting configurations for Inspector scans.</td>
</tr>
<tr>
    <td><a href="#update_configuration"><CopyableCode code="update_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates setting configurations for your Amazon Inspector account. When you use this API as an Amazon Inspector delegated administrator this updates the setting for all accounts you manage. Member accounts in an organization cannot update this setting.</td>
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
    defaultValue="get_configuration"
    values={[
        { label: 'get_configuration', value: 'get_configuration' }
    ]}
>
<TabItem value="get_configuration">

Retrieves setting configurations for Inspector scans.

```sql
SELECT
ec2Configuration,
ecrConfiguration
FROM aws.inspector2.configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_configuration"
    values={[
        { label: 'update_configuration', value: 'update_configuration' }
    ]}
>
<TabItem value="update_configuration">

Updates setting configurations for your Amazon Inspector account. When you use this API as an Amazon Inspector delegated administrator this updates the setting for all accounts you manage. Member accounts in an organization cannot update this setting.

```sql
UPDATE aws.inspector2.configurations
SET 
ecrConfiguration = '{{ ecrConfiguration }}',
ec2Configuration = '{{ ec2Configuration }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
