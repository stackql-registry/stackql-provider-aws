--- 
title: message_template_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - message_template_versions
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

Creates, updates, deletes, gets or lists a <code>message_template_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="message_template_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qconnect.message_template_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_message_template_versions"
    values={[
        { label: 'list_message_template_versions', value: 'list_message_template_versions' }
    ]}
>
<TabItem value="list_message_template_versions">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the message template. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\s_.,-&#93;+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="channel" /></td>
    <td><code>string</code></td>
    <td>The channel of the message template.</td>
</tr>
<tr>
    <td><CopyableCode code="channel_subtype" /></td>
    <td><code>string</code></td>
    <td>The channel subtype this message template applies to. (EMAIL, SMS, WHATSAPP, PUSH)</td>
</tr>
<tr>
    <td><CopyableCode code="is_active" /></td>
    <td><code>boolean</code></td>
    <td>Whether the version of the message template is activated.</td>
</tr>
<tr>
    <td><CopyableCode code="knowledge_base_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the knowledge base. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledge_base_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the knowledge base. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="message_template_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the message template. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;(:&#91;A-Z0-9_$&#93;+)&#123;0,1&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="message_template_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the message template. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="version_number" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the message template version.</td>
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
    <td><a href="#list_message_template_versions"><CopyableCode code="list_message_template_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-message_template_id"><code>message_template_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all the available versions for the specified Amazon Q in Connect message template.</td>
</tr>
<tr>
    <td><a href="#create_message_template_version"><CopyableCode code="create_message_template_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-message_template_id"><code>message_template_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new Amazon Q in Connect message template version from the current content and configuration of a message template. Versions are immutable and monotonically increasing. Once a version is created, you can reference a specific version of the message template by passing in <code>&lt;message-template-id&gt;</code>:<code>&lt;versionNumber&gt;</code> as the message template identifier. An error is displayed if the supplied messageTemplateContentSha256 is different from the messageTemplateContentSha256 of the message template with $LATEST qualifier. If multiple CreateMessageTemplateVersion requests are made while the message template remains the same, only the first invocation creates a new version and the succeeding requests will return the same response as the first invocation.</td>
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
    defaultValue="list_message_template_versions"
    values={[
        { label: 'list_message_template_versions', value: 'list_message_template_versions' }
    ]}
>
<TabItem value="list_message_template_versions">

Lists all the available versions for the specified Amazon Q in Connect message template.

```sql
SELECT
name,
channel,
channel_subtype,
is_active,
knowledge_base_arn,
knowledge_base_id,
message_template_arn,
message_template_id,
version_number
FROM aws.qconnect.message_template_versions
WHERE knowledge_base_id = '{{ knowledge_base_id }}' -- required
AND message_template_id = '{{ message_template_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_message_template_version"
    values={[
        { label: 'create_message_template_version', value: 'create_message_template_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_message_template_version">

Creates a new Amazon Q in Connect message template version from the current content and configuration of a message template. Versions are immutable and monotonically increasing. Once a version is created, you can reference a specific version of the message template by passing in <code>&lt;message-template-id&gt;</code>:<code>&lt;versionNumber&gt;</code> as the message template identifier. An error is displayed if the supplied messageTemplateContentSha256 is different from the messageTemplateContentSha256 of the message template with $LATEST qualifier. If multiple CreateMessageTemplateVersion requests are made while the message template remains the same, only the first invocation creates a new version and the succeeding requests will return the same response as the first invocation.

```sql
INSERT INTO aws.qconnect.message_template_versions (
messageTemplateContentSha256,
knowledge_base_id,
message_template_id,
region
)
SELECT 
'{{ messageTemplateContentSha256 }}',
'{{ knowledge_base_id }}',
'{{ message_template_id }}',
'{{ region }}'
RETURNING
message_template
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: message_template_versions
  props:
    - name: knowledge_base_id
      value: "{{ knowledge_base_id }}"
      description: Required parameter for the message_template_versions resource.
    - name: message_template_id
      value: "{{ message_template_id }}"
      description: Required parameter for the message_template_versions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the message_template_versions resource.
    - name: messageTemplateContentSha256
      value: "{{ messageTemplateContentSha256 }}"
`}</CodeBlock>

</TabItem>
</Tabs>
