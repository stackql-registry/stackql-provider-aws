--- 
title: messages
hide_title: false
hide_table_of_contents: false
keywords:
  - messages
  - qconnect
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

Creates, updates, deletes, gets or lists a <code>messages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="messages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qconnect.messages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_messages"
    values={[
        { label: 'list_messages', value: 'list_messages' }
    ]}
>
<TabItem value="list_messages">

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
    <td><CopyableCode code="messageId" /></td>
    <td><code>string</code></td>
    <td>The identifier of a message. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="participant" /></td>
    <td><code>string</code></td>
    <td>The participant of a message. (CUSTOMER, AGENT, BOT)</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of a message.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>object</code></td>
    <td>The value of a message data.</td>
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
    <td><a href="#list_messages"><CopyableCode code="list_messages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists messages on an Amazon Q in Connect session.</td>
</tr>
<tr>
    <td><a href="#activate_message_template"><CopyableCode code="activate_message_template" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-message_template_id"><code>message_template_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-versionNumber"><code>versionNumber</code></a></td>
    <td></td>
    <td>Activates a specific version of the Amazon Q in Connect message template. After the version is activated, the previous active version will be deactivated automatically. You can use the $ACTIVE_VERSION qualifier later to reference the version that is in active status.</td>
</tr>
<tr>
    <td><a href="#deactivate_message_template"><CopyableCode code="deactivate_message_template" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-message_template_id"><code>message_template_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-versionNumber"><code>versionNumber</code></a></td>
    <td></td>
    <td>Deactivates a specific version of the Amazon Q in Connect message template . After the version is deactivated, you can no longer use the $ACTIVE_VERSION qualifier to reference the version in active status.</td>
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
<tr id="parameter-assistant_id">
    <td><CopyableCode code="assistant_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q in Connect assistant.</td>
</tr>
<tr id="parameter-knowledge_base_id">
    <td><CopyableCode code="knowledge_base_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</td>
</tr>
<tr id="parameter-message_template_id">
    <td><CopyableCode code="message_template_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the message template. Can be either the ID or the ARN. It cannot contain any qualifier.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-session_id">
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q in Connect session.</td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>The filter criteria for listing messages.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_messages"
    values={[
        { label: 'list_messages', value: 'list_messages' }
    ]}
>
<TabItem value="list_messages">

Lists messages on an Amazon Q in Connect session.

```sql
SELECT
messageId,
participant,
timestamp,
value
FROM aws.qconnect.messages
WHERE assistant_id = '{{ assistant_id }}' -- required
AND session_id = '{{ session_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND filter = '{{ filter }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="activate_message_template"
    values={[
        { label: 'activate_message_template', value: 'activate_message_template' },
        { label: 'deactivate_message_template', value: 'deactivate_message_template' }
    ]}
>
<TabItem value="activate_message_template">

Activates a specific version of the Amazon Q in Connect message template. After the version is activated, the previous active version will be deactivated automatically. You can use the $ACTIVE_VERSION qualifier later to reference the version that is in active status.

```sql
EXEC aws.qconnect.messages.activate_message_template 
@knowledge_base_id='{{ knowledge_base_id }}' --required, 
@message_template_id='{{ message_template_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"versionNumber": {{ versionNumber }}
}'
;
```
</TabItem>
<TabItem value="deactivate_message_template">

Deactivates a specific version of the Amazon Q in Connect message template . After the version is deactivated, you can no longer use the $ACTIVE_VERSION qualifier to reference the version in active status.

```sql
EXEC aws.qconnect.messages.deactivate_message_template 
@knowledge_base_id='{{ knowledge_base_id }}' --required, 
@message_template_id='{{ message_template_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"versionNumber": {{ versionNumber }}
}'
;
```
</TabItem>
</Tabs>
