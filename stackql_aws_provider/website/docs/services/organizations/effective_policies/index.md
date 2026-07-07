--- 
title: effective_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - effective_policies
  - organizations
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

Creates, updates, deletes, gets or lists an <code>effective_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="effective_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.organizations.effective_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_effective_policy"
    values={[
        { label: 'describe_effective_policy', value: 'describe_effective_policy' }
    ]}
>
<TabItem value="describe_effective_policy">

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
    <td><CopyableCode code="LastUpdatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time of the last update to this policy.</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyContent" /></td>
    <td><code>string</code></td>
    <td>The text content of the policy. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyType" /></td>
    <td><code>string</code></td>
    <td>The policy type. (TAG_POLICY, BACKUP_POLICY, AISERVICES_OPT_OUT_POLICY, CHATBOT_POLICY, DECLARATIVE_POLICY_EC2, SECURITYHUB_POLICY, INSPECTOR_POLICY, UPGRADE_ROLLOUT_POLICY, BEDROCK_POLICY, S3_POLICY, NETWORK_SECURITY_DIRECTOR_POLICY)</td>
</tr>
<tr>
    <td><CopyableCode code="TargetId" /></td>
    <td><code>string</code></td>
    <td>The account ID of the policy target. (pattern: &lt;code&gt;^(r-&#91;0-9a-z&#93;&#123;4,32&#125;)|(\d&#123;12&#125;)|(ou-&#91;0-9a-z&#93;&#123;4,32&#125;-&#91;a-z0-9&#93;&#123;8,32&#125;)$&lt;/code&gt;)</td>
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
    <td><a href="#describe_effective_policy"><CopyableCode code="describe_effective_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the contents of the effective policy for specified policy type and account. The effective policy is the aggregation of any policies of the specified type that the account inherits, plus any policy of that type that is directly attached to the account. This operation applies only to management policies. It does not apply to authorization policies: service control policies (SCPs) and resource control policies (RCPs). For more information about policy inheritance, see Understanding management policy inheritance in the Organizations User Guide. You can call this operation from any account in a organization.</td>
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
    defaultValue="describe_effective_policy"
    values={[
        { label: 'describe_effective_policy', value: 'describe_effective_policy' }
    ]}
>
<TabItem value="describe_effective_policy">

Returns the contents of the effective policy for specified policy type and account. The effective policy is the aggregation of any policies of the specified type that the account inherits, plus any policy of that type that is directly attached to the account. This operation applies only to management policies. It does not apply to authorization policies: service control policies (SCPs) and resource control policies (RCPs). For more information about policy inheritance, see Understanding management policy inheritance in the Organizations User Guide. You can call this operation from any account in a organization.

```sql
SELECT
LastUpdatedTimestamp,
PolicyContent,
PolicyType,
TargetId
FROM aws.organizations.effective_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
