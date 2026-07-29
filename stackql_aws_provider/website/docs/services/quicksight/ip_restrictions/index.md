--- 
title: ip_restrictions
hide_title: false
hide_table_of_contents: false
keywords:
  - ip_restrictions
  - quicksight
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

Creates, updates, deletes, gets or lists an <code>ip_restrictions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ip_restrictions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.ip_restrictions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_ip_restriction"
    values={[
        { label: 'describe_ip_restriction', value: 'describe_ip_restriction' }
    ]}
>
<TabItem value="describe_ip_restriction">

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
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that contains the IP rules. (pattern: &lt;code&gt;^&#91;0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>A value that specifies whether IP rules are turned on.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_restriction_rule_map" /></td>
    <td><code>object</code></td>
    <td>A map that describes the IP rules with CIDR range and description.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_endpoint_id_restriction_rule_map" /></td>
    <td><code>object</code></td>
    <td>A map of allowed VPC endpoint IDs and their rule descriptions.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id_restriction_rule_map" /></td>
    <td><code>object</code></td>
    <td>A map of allowed VPC IDs and their rule descriptions.</td>
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
    <td><a href="#describe_ip_restriction"><CopyableCode code="describe_ip_restriction" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a summary and status of IP rules.</td>
</tr>
<tr>
    <td><a href="#update_ip_restriction"><CopyableCode code="update_ip_restriction" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the content and status of IP rules. Traffic from a source is allowed when the source satisfies either the IpRestrictionRule, VpcIdRestrictionRule, or VpcEndpointIdRestrictionRule. To use this operation, you must provide the entire map of rules. You can use the DescribeIpRestriction operation to get the current rule map.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that contains the IP rules.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_ip_restriction"
    values={[
        { label: 'describe_ip_restriction', value: 'describe_ip_restriction' }
    ]}
>
<TabItem value="describe_ip_restriction">

Provides a summary and status of IP rules.

```sql
SELECT
aws_account_id,
enabled,
ip_restriction_rule_map,
request_id,
status,
vpc_endpoint_id_restriction_rule_map,
vpc_id_restriction_rule_map
FROM aws.quicksight.ip_restrictions
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_ip_restriction"
    values={[
        { label: 'update_ip_restriction', value: 'update_ip_restriction' }
    ]}
>
<TabItem value="update_ip_restriction">

Updates the content and status of IP rules. Traffic from a source is allowed when the source satisfies either the IpRestrictionRule, VpcIdRestrictionRule, or VpcEndpointIdRestrictionRule. To use this operation, you must provide the entire map of rules. You can use the DescribeIpRestriction operation to get the current rule map.

```sql
UPDATE aws.quicksight.ip_restrictions
SET 
IpRestrictionRuleMap = '{{ IpRestrictionRuleMap }}',
VpcIdRestrictionRuleMap = '{{ VpcIdRestrictionRuleMap }}',
VpcEndpointIdRestrictionRuleMap = '{{ VpcEndpointIdRestrictionRuleMap }}',
Enabled = {{ Enabled }}
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND region = '{{ region }}' --required
RETURNING
aws_account_id,
request_id,
status;
```
</TabItem>
</Tabs>
