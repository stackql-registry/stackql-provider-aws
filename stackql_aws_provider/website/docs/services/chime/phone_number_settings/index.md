--- 
title: phone_number_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - phone_number_settings
  - chime
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

Creates, updates, deletes, gets or lists a <code>phone_number_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="phone_number_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime.phone_number_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_phone_number_settings"
    values={[
        { label: 'get_phone_number_settings', value: 'get_phone_number_settings' }
    ]}
>
<TabItem value="get_phone_number_settings">

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
    <td><CopyableCode code="CallingName" /></td>
    <td><code>string</code></td>
    <td>The default outbound calling name for the account. (pattern: &lt;code&gt;^$|^&#91;a-zA-Z0-9 &#93;&#123;2,15&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CallingNameUpdatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The updated outbound calling name timestamp, in ISO 8601 format.</td>
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
    <td><a href="#get_phone_number_settings"><CopyableCode code="get_phone_number_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the phone number settings for the administrator's AWS account, such as the default outbound calling name.</td>
</tr>
<tr>
    <td><a href="#update_phone_number_settings"><CopyableCode code="update_phone_number_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CallingName"><code>CallingName</code></a></td>
    <td></td>
    <td>Updates the phone number settings for the administrator's AWS account, such as the default outbound calling name. You can update the default outbound calling name once every seven days. Outbound calling names can take up to 72 hours to update.</td>
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
    defaultValue="get_phone_number_settings"
    values={[
        { label: 'get_phone_number_settings', value: 'get_phone_number_settings' }
    ]}
>
<TabItem value="get_phone_number_settings">

Retrieves the phone number settings for the administrator's AWS account, such as the default outbound calling name.

```sql
SELECT
CallingName,
CallingNameUpdatedTimestamp
FROM aws.chime.phone_number_settings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_phone_number_settings"
    values={[
        { label: 'update_phone_number_settings', value: 'update_phone_number_settings' }
    ]}
>
<TabItem value="update_phone_number_settings">

Updates the phone number settings for the administrator's AWS account, such as the default outbound calling name. You can update the default outbound calling name once every seven days. Outbound calling names can take up to 72 hours to update.

```sql
UPDATE aws.chime.phone_number_settings
SET 
CallingName = '{{ CallingName }}'
WHERE 
region = '{{ region }}' --required
AND CallingName = '{{ CallingName }}' --required;
```
</TabItem>
</Tabs>
