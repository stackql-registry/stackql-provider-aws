--- 
title: compliance_details
hide_title: false
hide_table_of_contents: false
keywords:
  - compliance_details
  - fms
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

Creates, updates, deletes, gets or lists a <code>compliance_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="compliance_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fms.compliance_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_compliance_detail"
    values={[
        { label: 'get_compliance_detail', value: 'get_compliance_detail' }
    ]}
>
<TabItem value="get_compliance_detail">

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
    <td><CopyableCode code="evaluation_limit_exceeded" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if over 100 resources are noncompliant with the Firewall Manager policy.</td>
</tr>
<tr>
    <td><CopyableCode code="expired_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the returned information should be considered out of date.</td>
</tr>
<tr>
    <td><CopyableCode code="issue_info_map" /></td>
    <td><code>object</code></td>
    <td>Details about problems with dependent services, such as WAF or Config, and the error message received that indicates the problem with the service.</td>
</tr>
<tr>
    <td><CopyableCode code="member_account" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID. (pattern: &lt;code&gt;^&#91;0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Firewall Manager policy. (pattern: &lt;code&gt;^&#91;a-z0-9A-Z-&#93;&#123;36&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_owner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account that created the Firewall Manager policy. (pattern: &lt;code&gt;^&#91;0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="violators" /></td>
    <td><code>array</code></td>
    <td>An array of resources that aren't protected by the WAF or Shield Advanced policy or that aren't in compliance with the security group policy.</td>
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
    <td><a href="#get_compliance_detail"><CopyableCode code="get_compliance_detail" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed compliance information about the specified member account. Details include resources that are in and out of compliance with the specified policy. The reasons for resources being considered compliant depend on the Firewall Manager policy type.</td>
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
    defaultValue="get_compliance_detail"
    values={[
        { label: 'get_compliance_detail', value: 'get_compliance_detail' }
    ]}
>
<TabItem value="get_compliance_detail">

Returns detailed compliance information about the specified member account. Details include resources that are in and out of compliance with the specified policy. The reasons for resources being considered compliant depend on the Firewall Manager policy type.

```sql
SELECT
evaluation_limit_exceeded,
expired_at,
issue_info_map,
member_account,
policy_id,
policy_owner,
violators
FROM aws.fms.compliance_details
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
