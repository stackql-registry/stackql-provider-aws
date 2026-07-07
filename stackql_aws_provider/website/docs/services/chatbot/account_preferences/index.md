--- 
title: account_preferences
hide_title: false
hide_table_of_contents: false
keywords:
  - account_preferences
  - chatbot
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

Creates, updates, deletes, gets or lists an <code>account_preferences</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_preferences" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chatbot.account_preferences" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_account_preferences"
    values={[
        { label: 'get_account_preferences', value: 'get_account_preferences' }
    ]}
>
<TabItem value="get_account_preferences">

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
    <td><CopyableCode code="TrainingDataCollectionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Turns on training data collection. This helps improve the AWS Chatbot experience by allowing AWS Chatbot to store and use your customer information, such as AWS Chatbot configurations, notifications, user inputs, AWS Chatbot generated responses, and interaction data. This data helps us to continuously improve and develop Artificial Intelligence (AI) technologies. Your data is not shared with any third parties and is protected using sophisticated controls to prevent unauthorized access and misuse. AWS Chatbot does not store or use interactions in chat channels with Amazon Q for training AI technologies for AWS Chatbot.</td>
</tr>
<tr>
    <td><CopyableCode code="UserAuthorizationRequired" /></td>
    <td><code>boolean</code></td>
    <td>Enables use of a user role requirement in your chat configuration.</td>
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
    <td><a href="#get_account_preferences"><CopyableCode code="get_account_preferences" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns AWS Chatbot account preferences.</td>
</tr>
<tr>
    <td><a href="#update_account_preferences"><CopyableCode code="update_account_preferences" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates AWS Chatbot account preferences.</td>
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
    defaultValue="get_account_preferences"
    values={[
        { label: 'get_account_preferences', value: 'get_account_preferences' }
    ]}
>
<TabItem value="get_account_preferences">

Returns AWS Chatbot account preferences.

```sql
SELECT
TrainingDataCollectionEnabled,
UserAuthorizationRequired
FROM aws.chatbot.account_preferences
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_account_preferences"
    values={[
        { label: 'update_account_preferences', value: 'update_account_preferences' }
    ]}
>
<TabItem value="update_account_preferences">

Updates AWS Chatbot account preferences.

```sql
UPDATE aws.chatbot.account_preferences
SET 
UserAuthorizationRequired = {{ UserAuthorizationRequired }},
TrainingDataCollectionEnabled = {{ TrainingDataCollectionEnabled }}
WHERE 
region = '{{ region }}' --required
RETURNING
AccountPreferences;
```
</TabItem>
</Tabs>
