--- 
title: rcs_agent_country_launch_status
hide_title: false
hide_table_of_contents: false
keywords:
  - rcs_agent_country_launch_status
  - pinpoint_sms_voice_v2
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

Creates, updates, deletes, gets or lists a <code>rcs_agent_country_launch_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rcs_agent_country_launch_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.rcs_agent_country_launch_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_rcs_agent_country_launch_status"
    values={[
        { label: 'describe_rcs_agent_country_launch_status', value: 'describe_rcs_agent_country_launch_status' }
    ]}
>
<TabItem value="describe_rcs_agent_country_launch_status">

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
    <td><CopyableCode code="CarrierStatus" /></td>
    <td><code>array</code></td>
    <td>An array of CarrierStatusInformation objects containing carrier-level launch status details.</td>
</tr>
<tr>
    <td><CopyableCode code="IsoCountryCode" /></td>
    <td><code>string</code></td>
    <td>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. (pattern: &lt;code&gt;&#91;A-Z&#93;&#123;2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RcsPlatformId" /></td>
    <td><code>string</code></td>
    <td>The RCS platform identifier for this country.</td>
</tr>
<tr>
    <td><CopyableCode code="RegistrationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the registration associated with this country launch.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The launch status for this country. (CREATED, PENDING, PARTIAL, ACTIVE, REJECTED)</td>
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
    <td><a href="#describe_rcs_agent_country_launch_status"><CopyableCode code="describe_rcs_agent_country_launch_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the per-country launch status of an RCS agent, including carrier-level details for each country.</td>
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
    defaultValue="describe_rcs_agent_country_launch_status"
    values={[
        { label: 'describe_rcs_agent_country_launch_status', value: 'describe_rcs_agent_country_launch_status' }
    ]}
>
<TabItem value="describe_rcs_agent_country_launch_status">

Retrieves the per-country launch status of an RCS agent, including carrier-level details for each country.

```sql
SELECT
CarrierStatus,
IsoCountryCode,
RcsPlatformId,
RegistrationId,
Status
FROM aws.pinpoint_sms_voice_v2.rcs_agent_country_launch_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
