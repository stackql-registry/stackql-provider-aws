--- 
title: sms_sandbox_account_status
hide_title: false
hide_table_of_contents: false
keywords:
  - sms_sandbox_account_status
  - sns
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

Creates, updates, deletes, gets or lists a <code>sms_sandbox_account_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sms_sandbox_account_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sns.sms_sandbox_account_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sms_sandbox_account_status"
    values={[
        { label: 'get_sms_sandbox_account_status', value: 'get_sms_sandbox_account_status' }
    ]}
>
<TabItem value="get_sms_sandbox_account_status">

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
    <td><CopyableCode code="IsInSandbox" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the calling Amazon Web Services account is in the SMS sandbox.</td>
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
    <td><a href="#get_sms_sandbox_account_status"><CopyableCode code="get_sms_sandbox_account_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the SMS sandbox status for the calling Amazon Web Services account in the target Amazon Web Services Region. When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the SMS sandbox. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see SMS sandbox in the Amazon SNS Developer Guide.</td>
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
    defaultValue="get_sms_sandbox_account_status"
    values={[
        { label: 'get_sms_sandbox_account_status', value: 'get_sms_sandbox_account_status' }
    ]}
>
<TabItem value="get_sms_sandbox_account_status">

Retrieves the SMS sandbox status for the calling Amazon Web Services account in the target Amazon Web Services Region. When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the SMS sandbox. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see SMS sandbox in the Amazon SNS Developer Guide.

```sql
SELECT
IsInSandbox
FROM aws.sns.sms_sandbox_account_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
