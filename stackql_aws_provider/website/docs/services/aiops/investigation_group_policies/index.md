--- 
title: investigation_group_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - investigation_group_policies
  - aiops
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

Creates, updates, deletes, gets or lists an <code>investigation_group_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="investigation_group_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.aiops.investigation_group_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_investigation_group_policy"
    values={[
        { label: 'get_investigation_group_policy', value: 'get_investigation_group_policy' }
    ]}
>
<TabItem value="get_investigation_group_policy">

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
    <td><CopyableCode code="investigationGroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the investigation group that you want to view the policy of. (pattern: &lt;code&gt;arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):aiops:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:investigation-group\/&#91;A-Za-z0-9&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td>The policy, in JSON format. (pattern: &lt;code&gt;&#91;\u0009\u000A\u000D\u0020-\u00FF&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_investigation_group_policy"><CopyableCode code="get_investigation_group_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the JSON of the IAM resource policy associated with the specified investigation group in a string. For example, &#123;\"Version\":\"2012-10-17\",\"Statement\":&#91;&#123;\"Effect\":\"Allow\",\"Principal\":&#123;\"Service\":\"aiops.alarms.cloudwatch.amazonaws.com\"&#125;,\"Action\":&#91;\"aiops:CreateInvestigation\",\"aiops:CreateInvestigationEvent\"&#93;,\"Resource\":\"*\",\"Condition\":&#123;\"StringEquals\":&#123;\"aws:SourceAccount\":\"111122223333\"&#125;,\"ArnLike\":&#123;\"aws:SourceArn\":\"arn:aws:cloudwatch:us-east-1:111122223333:alarm:*\"&#125;&#125;&#125;&#93;&#125;.</td>
</tr>
<tr>
    <td><a href="#put_investigation_group_policy"><CopyableCode code="put_investigation_group_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policy"><code>policy</code></a></td>
    <td></td>
    <td>Creates an IAM resource policy and assigns it to the specified investigation group. If you create your investigation group with CreateInvestigationGroup and you want to enable CloudWatch alarms to create investigations and add events to investigations, you must use this operation to create a policy similar to this example. &#123; "Version": "2008-10-17", "Statement": &#91; &#123; "Effect": "Allow", "Principal": &#123; "Service": "aiops.alarms.cloudwatch.amazonaws.com" &#125;, "Action": &#91; "aiops:CreateInvestigation", "aiops:CreateInvestigationEvent" &#93;, "Resource": "*", "Condition": &#123; "StringEquals": &#123; "aws:SourceAccount": "account-id" &#125;, "ArnLike": &#123; "aws:SourceArn": "arn:aws:cloudwatch:region:account-id:alarm:*" &#125; &#125; &#125; &#93; &#125;</td>
</tr>
<tr>
    <td><a href="#delete_investigation_group_policy"><CopyableCode code="delete_investigation_group_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the IAM resource policy from being associated with the investigation group that you specify.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>Specify either the name or the ARN of the investigation group that you want to remove the policy from.</td>
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
    defaultValue="get_investigation_group_policy"
    values={[
        { label: 'get_investigation_group_policy', value: 'get_investigation_group_policy' }
    ]}
>
<TabItem value="get_investigation_group_policy">

Returns the JSON of the IAM resource policy associated with the specified investigation group in a string. For example, &#123;\"Version\":\"2012-10-17\",\"Statement\":[&#123;\"Effect\":\"Allow\",\"Principal\":&#123;\"Service\":\"aiops.alarms.cloudwatch.amazonaws.com\"&#125;,\"Action\":[\"aiops:CreateInvestigation\",\"aiops:CreateInvestigationEvent\"],\"Resource\":\"*\",\"Condition\":&#123;\"StringEquals\":&#123;\"aws:SourceAccount\":\"111122223333\"&#125;,\"ArnLike\":&#123;\"aws:SourceArn\":\"arn:aws:cloudwatch:us-east-1:111122223333:alarm:*\"&#125;&#125;&#125;]&#125;.

```sql
SELECT
investigationGroupArn,
policy
FROM aws.aiops.investigation_group_policies
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_investigation_group_policy"
    values={[
        { label: 'put_investigation_group_policy', value: 'put_investigation_group_policy' }
    ]}
>
<TabItem value="put_investigation_group_policy">

Creates an IAM resource policy and assigns it to the specified investigation group. If you create your investigation group with CreateInvestigationGroup and you want to enable CloudWatch alarms to create investigations and add events to investigations, you must use this operation to create a policy similar to this example. &#123; "Version": "2008-10-17", "Statement": [ &#123; "Effect": "Allow", "Principal": &#123; "Service": "aiops.alarms.cloudwatch.amazonaws.com" &#125;, "Action": [ "aiops:CreateInvestigation", "aiops:CreateInvestigationEvent" ], "Resource": "*", "Condition": &#123; "StringEquals": &#123; "aws:SourceAccount": "account-id" &#125;, "ArnLike": &#123; "aws:SourceArn": "arn:aws:cloudwatch:region:account-id:alarm:*" &#125; &#125; &#125; ] &#125;

```sql
REPLACE aws.aiops.investigation_group_policies
SET 
policy = '{{ policy }}'
WHERE 
identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
AND policy = '{{ policy }}' --required
RETURNING
investigationGroupArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_investigation_group_policy"
    values={[
        { label: 'delete_investigation_group_policy', value: 'delete_investigation_group_policy' }
    ]}
>
<TabItem value="delete_investigation_group_policy">

Removes the IAM resource policy from being associated with the investigation group that you specify.

```sql
DELETE FROM aws.aiops.investigation_group_policies
WHERE identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
