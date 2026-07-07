--- 
title: opt_out_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - opt_out_lists
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

Creates, updates, deletes, gets or lists an <code>opt_out_lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="opt_out_lists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.opt_out_lists" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_opt_out_lists"
    values={[
        { label: 'describe_opt_out_lists', value: 'describe_opt_out_lists' }
    ]}
>
<TabItem value="describe_opt_out_lists">

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
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the OutOutList was created, in UNIX epoch time format.</td>
</tr>
<tr>
    <td><CopyableCode code="OptOutListArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the OptOutList.</td>
</tr>
<tr>
    <td><CopyableCode code="OptOutListName" /></td>
    <td><code>string</code></td>
    <td>The name of the OptOutList. (pattern: &lt;code&gt;&#91;A-Za-z0-9_-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_opt_out_lists"><CopyableCode code="describe_opt_out_lists" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified opt-out list or all opt-out lists in your account. If you specify opt-out list names, the output includes information for only the specified opt-out lists. Opt-out lists include only those that meet the filter criteria. If you don't specify opt-out list names or filters, the output includes information for all opt-out lists. If you specify an opt-out list name that isn't valid, an error is returned.</td>
</tr>
<tr>
    <td><a href="#create_opt_out_list"><CopyableCode code="create_opt_out_list" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OptOutListName"><code>OptOutListName</code></a></td>
    <td></td>
    <td>Creates a new opt-out list. If the opt-out list name already exists, an error is returned. An opt-out list is a list of phone numbers that are opted out, meaning you can't send SMS or voice messages to them. If end user replies with the keyword "STOP," an entry for the phone number is added to the opt-out list. In addition to STOP, your recipients can use any supported opt-out keyword, such as CANCEL or OPTOUT. For a list of supported opt-out keywords, see SMS opt out in the End User Messaging SMS User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_opt_out_list"><CopyableCode code="delete_opt_out_list" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing opt-out list. All opted out phone numbers in the opt-out list are deleted. If the specified opt-out list name doesn't exist or is in-use by an origination phone number or pool, an error is returned.</td>
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
    defaultValue="describe_opt_out_lists"
    values={[
        { label: 'describe_opt_out_lists', value: 'describe_opt_out_lists' }
    ]}
>
<TabItem value="describe_opt_out_lists">

Describes the specified opt-out list or all opt-out lists in your account. If you specify opt-out list names, the output includes information for only the specified opt-out lists. Opt-out lists include only those that meet the filter criteria. If you don't specify opt-out list names or filters, the output includes information for all opt-out lists. If you specify an opt-out list name that isn't valid, an error is returned.

```sql
SELECT
CreatedTimestamp,
OptOutListArn,
OptOutListName
FROM aws.pinpoint_sms_voice_v2.opt_out_lists
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_opt_out_list"
    values={[
        { label: 'create_opt_out_list', value: 'create_opt_out_list' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_opt_out_list">

Creates a new opt-out list. If the opt-out list name already exists, an error is returned. An opt-out list is a list of phone numbers that are opted out, meaning you can't send SMS or voice messages to them. If end user replies with the keyword "STOP," an entry for the phone number is added to the opt-out list. In addition to STOP, your recipients can use any supported opt-out keyword, such as CANCEL or OPTOUT. For a list of supported opt-out keywords, see SMS opt out in the End User Messaging SMS User Guide.

```sql
INSERT INTO aws.pinpoint_sms_voice_v2.opt_out_lists (
OptOutListName,
Tags,
ClientToken,
region
)
SELECT 
'{{ OptOutListName }}' /* required */,
'{{ Tags }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
CreatedTimestamp,
OptOutListArn,
OptOutListName,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: opt_out_lists
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the opt_out_lists resource.
    - name: OptOutListName
      value: "{{ OptOutListName }}"
      description: |
        The name of the new OptOutList.
    - name: Tags
      description: |
        An array of tags (key and value pairs) to associate with the new OptOutList.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_opt_out_list"
    values={[
        { label: 'delete_opt_out_list', value: 'delete_opt_out_list' }
    ]}
>
<TabItem value="delete_opt_out_list">

Deletes an existing opt-out list. All opted out phone numbers in the opt-out list are deleted. If the specified opt-out list name doesn't exist or is in-use by an origination phone number or pool, an error is returned.

```sql
DELETE FROM aws.pinpoint_sms_voice_v2.opt_out_lists
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
