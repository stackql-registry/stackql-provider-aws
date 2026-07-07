--- 
title: keywords
hide_title: false
hide_table_of_contents: false
keywords:
  - keywords
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

Creates, updates, deletes, gets or lists a <code>keywords</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="keywords" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.keywords" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_keywords"
    values={[
        { label: 'describe_keywords', value: 'describe_keywords' }
    ]}
>
<TabItem value="describe_keywords">

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
    <td><CopyableCode code="Keyword" /></td>
    <td><code>string</code></td>
    <td>The keyword as a string. (pattern: &lt;code&gt;&#91; \S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="KeywordAction" /></td>
    <td><code>string</code></td>
    <td>The action to perform for the keyword. (AUTOMATIC_RESPONSE, OPT_OUT, OPT_IN)</td>
</tr>
<tr>
    <td><CopyableCode code="KeywordMessage" /></td>
    <td><code>string</code></td>
    <td>A custom message that can be used with the keyword. (pattern: &lt;code&gt;(?!\s*$)&#91;\s\S&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_keywords"><CopyableCode code="describe_keywords" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified keywords or all keywords on your origination phone number or pool. A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, End User Messaging SMS responds with a customizable message. If you specify a keyword that isn't valid, an error is returned.</td>
</tr>
<tr>
    <td><a href="#put_keyword"><CopyableCode code="put_keyword" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OriginationIdentity"><code>OriginationIdentity</code></a>, <a href="#parameter-KeywordMessage"><code>KeywordMessage</code></a></td>
    <td></td>
    <td>Creates or updates a keyword configuration on an origination phone number or pool. A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, End User Messaging SMS responds with a customizable message. If you specify a keyword that isn't valid, an error is returned.</td>
</tr>
<tr>
    <td><a href="#delete_keyword"><CopyableCode code="delete_keyword" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing keyword from an origination phone number or pool. A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, End User Messaging SMS responds with a customizable message. Keywords "HELP" and "STOP" can't be deleted or modified.</td>
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
    defaultValue="describe_keywords"
    values={[
        { label: 'describe_keywords', value: 'describe_keywords' }
    ]}
>
<TabItem value="describe_keywords">

Describes the specified keywords or all keywords on your origination phone number or pool. A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, End User Messaging SMS responds with a customizable message. If you specify a keyword that isn't valid, an error is returned.

```sql
SELECT
Keyword,
KeywordAction,
KeywordMessage
FROM aws.pinpoint_sms_voice_v2.keywords
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_keyword"
    values={[
        { label: 'put_keyword', value: 'put_keyword' }
    ]}
>
<TabItem value="put_keyword">

Creates or updates a keyword configuration on an origination phone number or pool. A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, End User Messaging SMS responds with a customizable message. If you specify a keyword that isn't valid, an error is returned.

```sql
REPLACE aws.pinpoint_sms_voice_v2.keywords
SET 
OriginationIdentity = '{{ OriginationIdentity }}',
Keyword = '{{ Keyword }}',
KeywordMessage = '{{ KeywordMessage }}',
KeywordAction = '{{ KeywordAction }}'
WHERE 
region = '{{ region }}' --required
AND OriginationIdentity = '{{ OriginationIdentity }}' --required
AND KeywordMessage = '{{ KeywordMessage }}' --required
RETURNING
Keyword,
KeywordAction,
KeywordMessage,
OriginationIdentity,
OriginationIdentityArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_keyword"
    values={[
        { label: 'delete_keyword', value: 'delete_keyword' }
    ]}
>
<TabItem value="delete_keyword">

Deletes an existing keyword from an origination phone number or pool. A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, End User Messaging SMS responds with a customizable message. Keywords "HELP" and "STOP" can't be deleted or modified.

```sql
DELETE FROM aws.pinpoint_sms_voice_v2.keywords
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
