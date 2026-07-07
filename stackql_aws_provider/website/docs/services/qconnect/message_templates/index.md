--- 
title: message_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - message_templates
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

Creates, updates, deletes, gets or lists a <code>message_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="message_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qconnect.message_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_message_template"
    values={[
        { label: 'get_message_template', value: 'get_message_template' },
        { label: 'search_message_templates', value: 'search_message_templates' },
        { label: 'list_message_templates', value: 'list_message_templates' }
    ]}
>
<TabItem value="get_message_template">

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
    <td><CopyableCode code="attachments" /></td>
    <td><code>array</code></td>
    <td>The message template attachments.</td>
</tr>
<tr>
    <td><CopyableCode code="attributeTypes" /></td>
    <td><code>array</code></td>
    <td>The types of attributes contain the message template.</td>
</tr>
<tr>
    <td><CopyableCode code="channel" /></td>
    <td><code>string</code></td>
    <td>The channel of the message template.</td>
</tr>
<tr>
    <td><CopyableCode code="channelSubtype" /></td>
    <td><code>string</code></td>
    <td>The channel subtype this message template applies to. (EMAIL, SMS, WHATSAPP, PUSH)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>The container of message template content.</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the message template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultAttributes" /></td>
    <td><code>object</code></td>
    <td>The attributes that are used with the message template.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the message template. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\s_.,-&#93;+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="groupingConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration information of the grouping of Amazon Q in Connect users.</td>
</tr>
<tr>
    <td><CopyableCode code="isActive" /></td>
    <td><code>boolean</code></td>
    <td>Whether the version of the message template is activated.</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeBaseArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the knowledge base. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeBaseId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the knowledge base. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>The language code value for the language in which the quick response is written. The supported language codes include de_DE, en_US, es_ES, fr_FR, id_ID, it_IT, ja_JP, ko_KR, pt_BR, zh_CN, zh_TW</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who last updated the message template data. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;+?:&#91;a-z-&#93;+?:&#91;a-z0-9-&#93;*?:(&#91;0-9&#93;&#123;12&#125;)?:&#91;a-zA-Z0-9-:/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the message template data was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="messageTemplateArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the message template. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;(:&#91;A-Z0-9_$&#93;+)&#123;0,1&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="messageTemplateContentSha256" /></td>
    <td><code>string</code></td>
    <td>The checksum value of the message template content that is referenced by the $LATEST qualifier. It can be returned in MessageTemplateData or ExtendedMessageTemplateData. It’s calculated by content, language, defaultAttributes and Attachments of the message template. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="messageTemplateId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the message template. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceConfigurationSummary" /></td>
    <td><code>object</code></td>
    <td>The source configuration summary of the message template.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="versionNumber" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the message template version.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_message_templates">

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
    <td><CopyableCode code="channelSubtype" /></td>
    <td><code>string</code></td>
    <td>The channel subtype this message template applies to. (EMAIL, SMS, WHATSAPP, PUSH)</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the message template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the message template. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\s_.,-&#93;+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="groupingConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration information of the grouping of Amazon Q in Connect users.</td>
</tr>
<tr>
    <td><CopyableCode code="isActive" /></td>
    <td><code>boolean</code></td>
    <td>Whether the version of the message template is activated.</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeBaseArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the knowledge base. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeBaseId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the knowledge base. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>The language code value for the language in which the quick response is written. The supported language codes include de_DE, en_US, es_ES, fr_FR, id_ID, it_IT, ja_JP, ko_KR, pt_BR, zh_CN, zh_TW</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who last updated the message template data. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;+?:&#91;a-z-&#93;+?:&#91;a-z0-9-&#93;*?:(&#91;0-9&#93;&#123;12&#125;)?:&#91;a-zA-Z0-9-:/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the message template data was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="messageTemplateArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the message template. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;(:&#91;A-Z0-9_$&#93;+)&#123;0,1&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="messageTemplateId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the message template. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceConfigurationSummary" /></td>
    <td><code>object</code></td>
    <td>The source configuration summary of the message template.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="versionNumber" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the message template version.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_message_templates">

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
    <td><CopyableCode code="activeVersionNumber" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the message template version that is activated.</td>
</tr>
<tr>
    <td><CopyableCode code="channel" /></td>
    <td><code>string</code></td>
    <td>The channel this message template applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="channelSubtype" /></td>
    <td><code>string</code></td>
    <td>The channel subtype this message template applies to. (EMAIL, SMS, WHATSAPP, PUSH)</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the message template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the message template. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\s_.,-&#93;+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeBaseArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the knowledge base. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeBaseId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the knowledge base. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who last updated the message template data. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;+?:&#91;a-z-&#93;+?:&#91;a-z0-9-&#93;*?:(&#91;0-9&#93;&#123;12&#125;)?:&#91;a-zA-Z0-9-:/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the message template data was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="messageTemplateArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the message template. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;(:&#91;A-Z0-9_$&#93;+)&#123;0,1&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="messageTemplateId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the message template. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceConfiguration" /></td>
    <td><code>object</code></td>
    <td>The container of message template source configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
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
    <td><a href="#get_message_template"><CopyableCode code="get_message_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-message_template_id"><code>message_template_id</code></a>, <a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the Amazon Q in Connect message template. The message template identifier can contain an optional qualifier, for example, <code>&lt;message-template-id&gt;</code>:<code>&lt;qualifier&gt;</code>, which is either an actual version number or an Amazon Q Connect managed qualifier $ACTIVE_VERSION | $LATEST. If it is not supplied, then $LATEST is assumed implicitly.</td>
</tr>
<tr>
    <td><a href="#search_message_templates"><CopyableCode code="search_message_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Searches for Amazon Q in Connect message templates in the specified knowledge base.</td>
</tr>
<tr>
    <td><a href="#list_message_templates"><CopyableCode code="list_message_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all the available Amazon Q in Connect message templates for the specified knowledge base.</td>
</tr>
<tr>
    <td><a href="#create_message_template_attachment"><CopyableCode code="create_message_template_attachment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-message_template_id"><code>message_template_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-contentDisposition"><code>contentDisposition</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-body"><code>body</code></a></td>
    <td></td>
    <td>Uploads an attachment file to the specified Amazon Q in Connect message template. The name of the message template attachment has to be unique for each message template referenced by the $LATEST qualifier. The body of the attachment file should be encoded using base64 encoding. After the file is uploaded, you can use the pre-signed Amazon S3 URL returned in response to download the uploaded file.</td>
</tr>
<tr>
    <td><a href="#create_message_template"><CopyableCode code="create_message_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-channelSubtype"><code>channelSubtype</code></a></td>
    <td></td>
    <td>Creates an Amazon Q in Connect message template. The name of the message template has to be unique for each knowledge base. The channel subtype of the message template is immutable and cannot be modified after creation. After the message template is created, you can use the $LATEST qualifier to reference the created message template.</td>
</tr>
<tr>
    <td><a href="#update_message_template"><CopyableCode code="update_message_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-message_template_id"><code>message_template_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the Amazon Q in Connect message template. Partial update is supported. If any field is not supplied, it will remain unchanged for the message template that is referenced by the $LATEST qualifier. Any modification will only apply to the message template that is referenced by the $LATEST qualifier. The fields for all available versions will remain unchanged.</td>
</tr>
<tr>
    <td><a href="#delete_message_template_attachment"><CopyableCode code="delete_message_template_attachment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-message_template_id"><code>message_template_id</code></a>, <a href="#parameter-attachment_id"><code>attachment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the attachment file from the Amazon Q in Connect message template that is referenced by $LATEST qualifier. Attachments on available message template versions will remain unchanged.</td>
</tr>
<tr>
    <td><a href="#delete_message_template"><CopyableCode code="delete_message_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-message_template_id"><code>message_template_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Q in Connect message template entirely or a specific version of the message template if version is supplied in the request. You can provide the message template identifier as <code>&lt;message-template-id&gt;</code>:<code>&lt;versionNumber&gt;</code> to delete a specific version of the message template. If it is not supplied, the message template and all available versions will be deleted.</td>
</tr>
<tr>
    <td><a href="#render_message_template"><CopyableCode code="render_message_template" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-message_template_id"><code>message_template_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-attributes"><code>attributes</code></a></td>
    <td></td>
    <td>Renders the Amazon Q in Connect message template based on the attribute values provided and generates the message content. For any variable present in the message template, if the attribute value is neither provided in the attribute request parameter nor the default attribute of the message template, the rendered message content will keep the variable placeholder as it is and return the attribute keys that are missing.</td>
</tr>
<tr>
    <td><a href="#update_message_template_metadata"><CopyableCode code="update_message_template_metadata" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-message_template_id"><code>message_template_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the Amazon Q in Connect message template metadata. Note that any modification to the message template’s name, description and grouping configuration will applied to the message template pointed by the $LATEST qualifier and all available versions. Partial update is supported. If any field is not supplied, it will remain unchanged for the message template.</td>
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
<tr id="parameter-attachment_id">
    <td><CopyableCode code="attachment_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the attachment file.</td>
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
    defaultValue="get_message_template"
    values={[
        { label: 'get_message_template', value: 'get_message_template' },
        { label: 'search_message_templates', value: 'search_message_templates' },
        { label: 'list_message_templates', value: 'list_message_templates' }
    ]}
>
<TabItem value="get_message_template">

Retrieves the Amazon Q in Connect message template. The message template identifier can contain an optional qualifier, for example, <code>&lt;message-template-id&gt;</code>:<code>&lt;qualifier&gt;</code>, which is either an actual version number or an Amazon Q Connect managed qualifier $ACTIVE_VERSION | $LATEST. If it is not supplied, then $LATEST is assumed implicitly.

```sql
SELECT
name,
attachments,
attributeTypes,
channel,
channelSubtype,
content,
createdTime,
defaultAttributes,
description,
groupingConfiguration,
isActive,
knowledgeBaseArn,
knowledgeBaseId,
language,
lastModifiedBy,
lastModifiedTime,
messageTemplateArn,
messageTemplateContentSha256,
messageTemplateId,
sourceConfigurationSummary,
tags,
versionNumber
FROM aws.qconnect.message_templates
WHERE message_template_id = '{{ message_template_id }}' -- required
AND knowledge_base_id = '{{ knowledge_base_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_message_templates">

Searches for Amazon Q in Connect message templates in the specified knowledge base.

```sql
SELECT
name,
channel,
channelSubtype,
createdTime,
description,
groupingConfiguration,
isActive,
knowledgeBaseArn,
knowledgeBaseId,
language,
lastModifiedBy,
lastModifiedTime,
messageTemplateArn,
messageTemplateId,
sourceConfigurationSummary,
tags,
versionNumber
FROM aws.qconnect.message_templates
WHERE knowledge_base_id = '{{ knowledge_base_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="list_message_templates">

Lists all the available Amazon Q in Connect message templates for the specified knowledge base.

```sql
SELECT
name,
activeVersionNumber,
channel,
channelSubtype,
createdTime,
description,
knowledgeBaseArn,
knowledgeBaseId,
lastModifiedBy,
lastModifiedTime,
messageTemplateArn,
messageTemplateId,
sourceConfiguration,
tags
FROM aws.qconnect.message_templates
WHERE knowledge_base_id = '{{ knowledge_base_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_message_template_attachment"
    values={[
        { label: 'create_message_template_attachment', value: 'create_message_template_attachment' },
        { label: 'create_message_template', value: 'create_message_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_message_template_attachment">

Uploads an attachment file to the specified Amazon Q in Connect message template. The name of the message template attachment has to be unique for each message template referenced by the $LATEST qualifier. The body of the attachment file should be encoded using base64 encoding. After the file is uploaded, you can use the pre-signed Amazon S3 URL returned in response to download the uploaded file.

```sql
INSERT INTO aws.qconnect.message_templates (
contentDisposition,
name,
body,
clientToken,
knowledge_base_id,
message_template_id,
region
)
SELECT 
'{{ contentDisposition }}' /* required */,
'{{ name }}' /* required */,
'{{ body }}' /* required */,
'{{ clientToken }}',
'{{ knowledge_base_id }}',
'{{ message_template_id }}',
'{{ region }}'
RETURNING
attachment
;
```
</TabItem>
<TabItem value="create_message_template">

Creates an Amazon Q in Connect message template. The name of the message template has to be unique for each knowledge base. The channel subtype of the message template is immutable and cannot be modified after creation. After the message template is created, you can use the $LATEST qualifier to reference the created message template.

```sql
INSERT INTO aws.qconnect.message_templates (
name,
content,
description,
channelSubtype,
language,
sourceConfiguration,
defaultAttributes,
groupingConfiguration,
clientToken,
tags,
knowledge_base_id,
region
)
SELECT 
'{{ name }}',
'{{ content }}',
'{{ description }}',
'{{ channelSubtype }}' /* required */,
'{{ language }}',
'{{ sourceConfiguration }}',
'{{ defaultAttributes }}',
'{{ groupingConfiguration }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ knowledge_base_id }}',
'{{ region }}'
RETURNING
messageTemplate
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: message_templates
  props:
    - name: knowledge_base_id
      value: "{{ knowledge_base_id }}"
      description: Required parameter for the message_templates resource.
    - name: message_template_id
      value: "{{ message_template_id }}"
      description: Required parameter for the message_templates resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the message_templates resource.
    - name: contentDisposition
      value: "{{ contentDisposition }}"
      valid_values: ['ATTACHMENT']
    - name: name
      value: "{{ name }}"
    - name: body
      value: "{{ body }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: content
      description: |
        The container of message template content.
      value:
        email:
          subject: "{{ subject }}"
          body:
            plainText:
              content: "{{ content }}"
            html:
              content: "{{ content }}"
          headers:
            - name: "{{ name }}"
              value: "{{ value }}"
        sms:
          body:
            plainText:
              content: "{{ content }}"
        whatsApp:
          data: "{{ data }}"
        push:
          adm:
            title_: "{{ title_ }}"
            body:
              content: "{{ content }}"
            action: "{{ action }}"
            sound: "{{ sound }}"
            url: "{{ url }}"
            imageUrl: "{{ imageUrl }}"
            imageIconUrl: "{{ imageIconUrl }}"
            smallImageIconUrl: "{{ smallImageIconUrl }}"
            rawContent:
              content: "{{ content }}"
          apns:
            title_: "{{ title_ }}"
            body:
              content: "{{ content }}"
            action: "{{ action }}"
            sound: "{{ sound }}"
            url: "{{ url }}"
            mediaUrl: "{{ mediaUrl }}"
            rawContent:
              content: "{{ content }}"
          fcm:
            title_: "{{ title_ }}"
            body:
              content: "{{ content }}"
            action: "{{ action }}"
            sound: "{{ sound }}"
            url: "{{ url }}"
            imageUrl: "{{ imageUrl }}"
            imageIconUrl: "{{ imageIconUrl }}"
            smallImageIconUrl: "{{ smallImageIconUrl }}"
            rawContent:
              content: "{{ content }}"
          baidu:
            title_: "{{ title_ }}"
            body:
              content: "{{ content }}"
            action: "{{ action }}"
            sound: "{{ sound }}"
            url: "{{ url }}"
            imageUrl: "{{ imageUrl }}"
            imageIconUrl: "{{ imageIconUrl }}"
            smallImageIconUrl: "{{ smallImageIconUrl }}"
            rawContent:
              content: "{{ content }}"
    - name: description
      value: "{{ description }}"
    - name: channelSubtype
      value: "{{ channelSubtype }}"
      valid_values: ['EMAIL', 'SMS', 'WHATSAPP', 'PUSH']
    - name: language
      value: "{{ language }}"
    - name: sourceConfiguration
      description: |
        The container of message template source configuration.
      value:
        whatsApp:
          businessAccountId: "{{ businessAccountId }}"
          templateId: "{{ templateId }}"
          components:
            - "{{ components }}"
    - name: defaultAttributes
      description: |
        The attributes that are used with the message template.
      value:
        systemAttributes:
          name: "{{ name }}"
          customerEndpoint:
            address: "{{ address }}"
          systemEndpoint:
            address: "{{ address }}"
        agentAttributes:
          firstName: "{{ firstName }}"
          lastName: "{{ lastName }}"
        customerProfileAttributes:
          profileId: "{{ profileId }}"
          profileARN: "{{ profileARN }}"
          firstName: "{{ firstName }}"
          middleName: "{{ middleName }}"
          lastName: "{{ lastName }}"
          accountNumber: "{{ accountNumber }}"
          emailAddress: "{{ emailAddress }}"
          phoneNumber: "{{ phoneNumber }}"
          additionalInformation: "{{ additionalInformation }}"
          partyType: "{{ partyType }}"
          businessName: "{{ businessName }}"
          birthDate: "{{ birthDate }}"
          gender: "{{ gender }}"
          mobilePhoneNumber: "{{ mobilePhoneNumber }}"
          homePhoneNumber: "{{ homePhoneNumber }}"
          businessPhoneNumber: "{{ businessPhoneNumber }}"
          businessEmailAddress: "{{ businessEmailAddress }}"
          address1: "{{ address1 }}"
          address2: "{{ address2 }}"
          address3: "{{ address3 }}"
          address4: "{{ address4 }}"
          city: "{{ city }}"
          county: "{{ county }}"
          country: "{{ country }}"
          postalCode: "{{ postalCode }}"
          province: "{{ province }}"
          state: "{{ state }}"
          shippingAddress1: "{{ shippingAddress1 }}"
          shippingAddress2: "{{ shippingAddress2 }}"
          shippingAddress3: "{{ shippingAddress3 }}"
          shippingAddress4: "{{ shippingAddress4 }}"
          shippingCity: "{{ shippingCity }}"
          shippingCounty: "{{ shippingCounty }}"
          shippingCountry: "{{ shippingCountry }}"
          shippingPostalCode: "{{ shippingPostalCode }}"
          shippingProvince: "{{ shippingProvince }}"
          shippingState: "{{ shippingState }}"
          mailingAddress1: "{{ mailingAddress1 }}"
          mailingAddress2: "{{ mailingAddress2 }}"
          mailingAddress3: "{{ mailingAddress3 }}"
          mailingAddress4: "{{ mailingAddress4 }}"
          mailingCity: "{{ mailingCity }}"
          mailingCounty: "{{ mailingCounty }}"
          mailingCountry: "{{ mailingCountry }}"
          mailingPostalCode: "{{ mailingPostalCode }}"
          mailingProvince: "{{ mailingProvince }}"
          mailingState: "{{ mailingState }}"
          billingAddress1: "{{ billingAddress1 }}"
          billingAddress2: "{{ billingAddress2 }}"
          billingAddress3: "{{ billingAddress3 }}"
          billingAddress4: "{{ billingAddress4 }}"
          billingCity: "{{ billingCity }}"
          billingCounty: "{{ billingCounty }}"
          billingCountry: "{{ billingCountry }}"
          billingPostalCode: "{{ billingPostalCode }}"
          billingProvince: "{{ billingProvince }}"
          billingState: "{{ billingState }}"
          custom: "{{ custom }}"
        customAttributes: "{{ customAttributes }}"
    - name: groupingConfiguration
      description: |
        The configuration information of the grouping of Amazon Q in Connect users.
      value:
        criteria: "{{ criteria }}"
        values:
          - "{{ values }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_message_template"
    values={[
        { label: 'update_message_template', value: 'update_message_template' }
    ]}
>
<TabItem value="update_message_template">

Updates the Amazon Q in Connect message template. Partial update is supported. If any field is not supplied, it will remain unchanged for the message template that is referenced by the $LATEST qualifier. Any modification will only apply to the message template that is referenced by the $LATEST qualifier. The fields for all available versions will remain unchanged.

```sql
UPDATE aws.qconnect.message_templates
SET 
content = '{{ content }}',
language = '{{ language }}',
sourceConfiguration = '{{ sourceConfiguration }}',
defaultAttributes = '{{ defaultAttributes }}'
WHERE 
knowledge_base_id = '{{ knowledge_base_id }}' --required
AND message_template_id = '{{ message_template_id }}' --required
AND region = '{{ region }}' --required
RETURNING
messageTemplate;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_message_template_attachment"
    values={[
        { label: 'delete_message_template_attachment', value: 'delete_message_template_attachment' },
        { label: 'delete_message_template', value: 'delete_message_template' }
    ]}
>
<TabItem value="delete_message_template_attachment">

Deletes the attachment file from the Amazon Q in Connect message template that is referenced by $LATEST qualifier. Attachments on available message template versions will remain unchanged.

```sql
DELETE FROM aws.qconnect.message_templates
WHERE knowledge_base_id = '{{ knowledge_base_id }}' --required
AND message_template_id = '{{ message_template_id }}' --required
AND attachment_id = '{{ attachment_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_message_template">

Deletes an Amazon Q in Connect message template entirely or a specific version of the message template if version is supplied in the request. You can provide the message template identifier as <code>&lt;message-template-id&gt;</code>:<code>&lt;versionNumber&gt;</code> to delete a specific version of the message template. If it is not supplied, the message template and all available versions will be deleted.

```sql
DELETE FROM aws.qconnect.message_templates
WHERE knowledge_base_id = '{{ knowledge_base_id }}' --required
AND message_template_id = '{{ message_template_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="render_message_template"
    values={[
        { label: 'render_message_template', value: 'render_message_template' },
        { label: 'update_message_template_metadata', value: 'update_message_template_metadata' }
    ]}
>
<TabItem value="render_message_template">

Renders the Amazon Q in Connect message template based on the attribute values provided and generates the message content. For any variable present in the message template, if the attribute value is neither provided in the attribute request parameter nor the default attribute of the message template, the rendered message content will keep the variable placeholder as it is and return the attribute keys that are missing.

```sql
EXEC aws.qconnect.message_templates.render_message_template 
@knowledge_base_id='{{ knowledge_base_id }}' --required, 
@message_template_id='{{ message_template_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"attributes": "{{ attributes }}"
}'
;
```
</TabItem>
<TabItem value="update_message_template_metadata">

Updates the Amazon Q in Connect message template metadata. Note that any modification to the message template’s name, description and grouping configuration will applied to the message template pointed by the $LATEST qualifier and all available versions. Partial update is supported. If any field is not supplied, it will remain unchanged for the message template.

```sql
EXEC aws.qconnect.message_templates.update_message_template_metadata 
@knowledge_base_id='{{ knowledge_base_id }}' --required, 
@message_template_id='{{ message_template_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"name": "{{ name }}", 
"description": "{{ description }}", 
"groupingConfiguration": "{{ groupingConfiguration }}"
}'
;
```
</TabItem>
</Tabs>
