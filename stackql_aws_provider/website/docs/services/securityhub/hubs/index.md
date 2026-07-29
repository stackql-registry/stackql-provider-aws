--- 
title: hubs
hide_title: false
hide_table_of_contents: false
keywords:
  - hubs
  - securityhub
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

Creates, updates, deletes, gets or lists a <code>hubs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hubs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.hubs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_hub"
    values={[
        { label: 'describe_hub', value: 'describe_hub' }
    ]}
>
<TabItem value="describe_hub">

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
    <td><CopyableCode code="auto_enable_controls" /></td>
    <td><code>boolean</code></td>
    <td>Whether to automatically enable new controls when they are added to standards that are enabled. If set to true, then new controls for enabled standards are enabled automatically. If set to false, then new controls are not enabled. When you automatically enable new controls, you can interact with the controls in the console and programmatically immediately after release. However, automatically enabled controls have a temporary default status of DISABLED. It can take up to several days for Security Hub CSPM to process the control release and designate the control as ENABLED in your account. During the processing period, you can manually enable or disable a control, and Security Hub CSPM will maintain that designation regardless of whether you have AutoEnableControls set to true.</td>
</tr>
<tr>
    <td><CopyableCode code="control_finding_generator" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the calling account has consolidated control findings turned on. If the value for this field is set to SECURITY_CONTROL, Security Hub CSPM generates a single finding for a control check even when the check applies to multiple enabled standards. If the value for this field is set to STANDARD_CONTROL, Security Hub CSPM generates separate findings for a control check when the check applies to multiple enabled standards. The value for this field in a member account matches the value in the administrator account. For accounts that aren't part of an organization, the default value of this field is SECURITY_CONTROL if you enabled Security Hub CSPM on or after February 23, 2023. (STANDARD_CONTROL, SECURITY_CONTROL)</td>
</tr>
<tr>
    <td><CopyableCode code="hub_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Hub resource that was retrieved. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="subscribed_at" /></td>
    <td><code>string</code></td>
    <td>The date and time when Security Hub CSPM was enabled in the account. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#describe_hub"><CopyableCode code="describe_hub" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-HubArn"><code>HubArn</code></a></td>
    <td>Returns details about the Hub resource in your account, including the HubArn and the time when you enabled Security Hub CSPM.</td>
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
<tr id="parameter-HubArn">
    <td><CopyableCode code="HubArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Hub resource to retrieve.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_hub"
    values={[
        { label: 'describe_hub', value: 'describe_hub' }
    ]}
>
<TabItem value="describe_hub">

Returns details about the Hub resource in your account, including the HubArn and the time when you enabled Security Hub CSPM.

```sql
SELECT
auto_enable_controls,
control_finding_generator,
hub_arn,
subscribed_at
FROM aws.securityhub.hubs
WHERE region = '{{ region }}' -- required
AND HubArn = '{{ HubArn }}'
;
```
</TabItem>
</Tabs>
