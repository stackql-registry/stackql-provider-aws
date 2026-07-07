--- 
title: service_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - service_settings
  - ssm_quicksetup
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

Creates, updates, deletes, gets or lists a <code>service_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm_quicksetup.service_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service_settings"
    values={[
        { label: 'get_service_settings', value: 'get_service_settings' }
    ]}
>
<TabItem value="get_service_settings">

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
    <td><CopyableCode code="ExplorerEnablingRoleArn" /></td>
    <td><code>string</code></td>
    <td>The IAM role used to enable Explorer.</td>
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
    <td><a href="#get_service_settings"><CopyableCode code="get_service_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns settings configured for Quick Setup in the requesting Amazon Web Services account and Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#update_service_settings"><CopyableCode code="update_service_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates settings configured for Quick Setup.</td>
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
    defaultValue="get_service_settings"
    values={[
        { label: 'get_service_settings', value: 'get_service_settings' }
    ]}
>
<TabItem value="get_service_settings">

Returns settings configured for Quick Setup in the requesting Amazon Web Services account and Amazon Web Services Region.

```sql
SELECT
ExplorerEnablingRoleArn
FROM aws.ssm_quicksetup.service_settings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_service_settings"
    values={[
        { label: 'update_service_settings', value: 'update_service_settings' }
    ]}
>
<TabItem value="update_service_settings">

Updates settings configured for Quick Setup.

```sql
UPDATE aws.ssm_quicksetup.service_settings
SET 
ExplorerEnablingRoleArn = '{{ ExplorerEnablingRoleArn }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
