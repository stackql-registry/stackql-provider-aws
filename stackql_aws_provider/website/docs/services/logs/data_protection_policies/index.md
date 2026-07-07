--- 
title: data_protection_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - data_protection_policies
  - logs
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

Creates, updates, deletes, gets or lists a <code>data_protection_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_protection_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.data_protection_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_protection_policy"
    values={[
        { label: 'get_data_protection_policy', value: 'get_data_protection_policy' }
    ]}
>
<TabItem value="get_data_protection_policy">

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
    <td><CopyableCode code="lastUpdatedTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>The date and time that this policy was most recently updated.</td>
</tr>
<tr>
    <td><CopyableCode code="logGroupIdentifier" /></td>
    <td><code>string</code></td>
    <td>The log group name or ARN that you specified in your request. (pattern: &lt;code&gt;&#91;\w#+=/:,.@-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policyDocument" /></td>
    <td><code>string</code></td>
    <td>The data protection policy document for this log group.</td>
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
    <td><a href="#get_data_protection_policy"><CopyableCode code="get_data_protection_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a log group data protection policy.</td>
</tr>
<tr>
    <td><a href="#put_data_protection_policy"><CopyableCode code="put_data_protection_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-logGroupIdentifier"><code>logGroupIdentifier</code></a>, <a href="#parameter-policyDocument"><code>policyDocument</code></a></td>
    <td></td>
    <td>Creates a data protection policy for the specified log group. A data protection policy can help safeguard sensitive data that's ingested by the log group by auditing and masking the sensitive log data. Sensitive data is detected and masked when it is ingested into the log group. When you set a data protection policy, log events ingested into the log group before that time are not masked. By default, when a user views a log event that includes masked data, the sensitive data is replaced by asterisks. A user who has the logs:Unmask permission can use a GetLogEvents or FilterLogEvents operation with the unmask parameter set to true to view the unmasked log events. Users with the logs:Unmask can also view unmasked data in the CloudWatch Logs console by running a CloudWatch Logs Insights query with the unmask query command. For more information, including a list of types of data that can be audited and masked, see Protect sensitive log data with masking. The PutDataProtectionPolicy operation applies to only the specified log group. You can also use PutAccountPolicy to create an account-level data protection policy that applies to all log groups in the account, including both existing log groups and log groups that are created level. If a log group has its own data protection policy and the account also has an account-level data protection policy, then the two policies are cumulative. Any sensitive term specified in either policy is masked.</td>
</tr>
<tr>
    <td><a href="#delete_data_protection_policy"><CopyableCode code="delete_data_protection_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the data protection policy from the specified log group. For more information about data protection policies, see PutDataProtectionPolicy.</td>
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
    defaultValue="get_data_protection_policy"
    values={[
        { label: 'get_data_protection_policy', value: 'get_data_protection_policy' }
    ]}
>
<TabItem value="get_data_protection_policy">

Returns information about a log group data protection policy.

```sql
SELECT
lastUpdatedTime,
logGroupIdentifier,
policyDocument
FROM aws.logs.data_protection_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_data_protection_policy"
    values={[
        { label: 'put_data_protection_policy', value: 'put_data_protection_policy' }
    ]}
>
<TabItem value="put_data_protection_policy">

Creates a data protection policy for the specified log group. A data protection policy can help safeguard sensitive data that's ingested by the log group by auditing and masking the sensitive log data. Sensitive data is detected and masked when it is ingested into the log group. When you set a data protection policy, log events ingested into the log group before that time are not masked. By default, when a user views a log event that includes masked data, the sensitive data is replaced by asterisks. A user who has the logs:Unmask permission can use a GetLogEvents or FilterLogEvents operation with the unmask parameter set to true to view the unmasked log events. Users with the logs:Unmask can also view unmasked data in the CloudWatch Logs console by running a CloudWatch Logs Insights query with the unmask query command. For more information, including a list of types of data that can be audited and masked, see Protect sensitive log data with masking. The PutDataProtectionPolicy operation applies to only the specified log group. You can also use PutAccountPolicy to create an account-level data protection policy that applies to all log groups in the account, including both existing log groups and log groups that are created level. If a log group has its own data protection policy and the account also has an account-level data protection policy, then the two policies are cumulative. Any sensitive term specified in either policy is masked.

```sql
REPLACE aws.logs.data_protection_policies
SET 
logGroupIdentifier = '{{ logGroupIdentifier }}',
policyDocument = '{{ policyDocument }}'
WHERE 
region = '{{ region }}' --required
AND logGroupIdentifier = '{{ logGroupIdentifier }}' --required
AND policyDocument = '{{ policyDocument }}' --required
RETURNING
lastUpdatedTime,
logGroupIdentifier,
policyDocument;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_protection_policy"
    values={[
        { label: 'delete_data_protection_policy', value: 'delete_data_protection_policy' }
    ]}
>
<TabItem value="delete_data_protection_policy">

Deletes the data protection policy from the specified log group. For more information about data protection policies, see PutDataProtectionPolicy.

```sql
DELETE FROM aws.logs.data_protection_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
