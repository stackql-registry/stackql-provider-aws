--- 
title: inbound_dmarc_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - inbound_dmarc_settings
  - workmail
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

Creates, updates, deletes, gets or lists an <code>inbound_dmarc_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="inbound_dmarc_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workmail.inbound_dmarc_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_inbound_dmarc_settings"
    values={[
        { label: 'describe_inbound_dmarc_settings', value: 'describe_inbound_dmarc_settings' }
    ]}
>
<TabItem value="describe_inbound_dmarc_settings">

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
    <td><CopyableCode code="enforced" /></td>
    <td><code>boolean</code></td>
    <td>Lists the enforcement setting of the applied policy.</td>
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
    <td><a href="#describe_inbound_dmarc_settings"><CopyableCode code="describe_inbound_dmarc_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the settings in a DMARC policy for a specified organization.</td>
</tr>
<tr>
    <td><a href="#put_inbound_dmarc_settings"><CopyableCode code="put_inbound_dmarc_settings" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a></td>
    <td></td>
    <td>Enables or disables a DMARC policy for a given organization.</td>
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
    defaultValue="describe_inbound_dmarc_settings"
    values={[
        { label: 'describe_inbound_dmarc_settings', value: 'describe_inbound_dmarc_settings' }
    ]}
>
<TabItem value="describe_inbound_dmarc_settings">

Lists the settings in a DMARC policy for a specified organization.

```sql
SELECT
enforced
FROM aws.workmail.inbound_dmarc_settings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_inbound_dmarc_settings"
    values={[
        { label: 'put_inbound_dmarc_settings', value: 'put_inbound_dmarc_settings' }
    ]}
>
<TabItem value="put_inbound_dmarc_settings">

Enables or disables a DMARC policy for a given organization.

```sql
REPLACE aws.workmail.inbound_dmarc_settings
SET 
OrganizationId = '{{ OrganizationId }}',
Enforced = {{ Enforced }}
WHERE 
region = '{{ region }}' --required
AND OrganizationId = '{{ OrganizationId }}' --required;
```
</TabItem>
</Tabs>
