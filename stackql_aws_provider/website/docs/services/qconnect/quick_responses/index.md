--- 
title: quick_responses
hide_title: false
hide_table_of_contents: false
keywords:
  - quick_responses
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

Creates, updates, deletes, gets or lists a <code>quick_responses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="quick_responses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qconnect.quick_responses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_quick_response"
    values={[
        { label: 'get_quick_response', value: 'get_quick_response' },
        { label: 'search_quick_responses', value: 'search_quick_responses' },
        { label: 'list_quick_responses', value: 'list_quick_responses' }
    ]}
>
<TabItem value="get_quick_response">

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
    <td>The name of the quick response.</td>
</tr>
<tr>
    <td><CopyableCode code="channels" /></td>
    <td><code>array</code></td>
    <td>The Amazon Connect contact channels this quick response applies to. The supported contact channel types include Chat.</td>
</tr>
<tr>
    <td><CopyableCode code="contentType" /></td>
    <td><code>string</code></td>
    <td>The media type of the quick response content. Use application/x.quickresponse;format=plain for quick response written in plain text. Use application/x.quickresponse;format=markdown for quick response written in richtext. (pattern: &lt;code&gt;(application/x\.quickresponse;format=(plain|markdown))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="contents" /></td>
    <td><code>object</code></td>
    <td>The contents of the quick response.</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the quick response was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the quick response.</td>
</tr>
<tr>
    <td><CopyableCode code="groupingConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration information of the grouping of Amazon Q in Connect users.</td>
</tr>
<tr>
    <td><CopyableCode code="isActive" /></td>
    <td><code>boolean</code></td>
    <td>Whether the quick response is active.</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeBaseArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the knowledge base. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeBaseId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>The language code value for the language in which the quick response is written. The supported language codes include de_DE, en_US, es_ES, fr_FR, id_ID, it_IT, ja_JP, ko_KR, pt_BR, zh_CN, zh_TW</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who last updated the quick response data. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;+?:&#91;a-z-&#93;+?:&#91;a-z0-9-&#93;*?:(&#91;0-9&#93;&#123;12&#125;)?:&#91;a-zA-Z0-9-:/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the quick response data was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="quickResponseArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the quick response. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="quickResponseId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the quick response. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="shortcutKey" /></td>
    <td><code>string</code></td>
    <td>The shortcut key of the quick response. The value should be unique across the knowledge base.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the quick response data. (CREATE_IN_PROGRESS, CREATE_FAILED, CREATED, DELETE_IN_PROGRESS, DELETE_FAILED, DELETED, UPDATE_IN_PROGRESS, UPDATE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_quick_responses">

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
    <td>The name of the quick response.</td>
</tr>
<tr>
    <td><CopyableCode code="attributesInterpolated" /></td>
    <td><code>array</code></td>
    <td>The user defined contact attributes that are resolved when the search result is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="attributesNotInterpolated" /></td>
    <td><code>array</code></td>
    <td>The user defined contact attributes that are not resolved when the search result is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="channels" /></td>
    <td><code>array</code></td>
    <td>The Amazon Connect contact channels this quick response applies to. The supported contact channel types include Chat.</td>
</tr>
<tr>
    <td><CopyableCode code="contentType" /></td>
    <td><code>string</code></td>
    <td>The media type of the quick response content. Use application/x.quickresponse;format=plain for quick response written in plain text. Use application/x.quickresponse;format=markdown for quick response written in richtext. (pattern: &lt;code&gt;(application/x\.quickresponse;format=(plain|markdown))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="contents" /></td>
    <td><code>object</code></td>
    <td>The contents of the quick response.</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the quick response was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the quick response.</td>
</tr>
<tr>
    <td><CopyableCode code="groupingConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration information of the grouping of Amazon Q in Connect users.</td>
</tr>
<tr>
    <td><CopyableCode code="isActive" /></td>
    <td><code>boolean</code></td>
    <td>Whether the quick response is active.</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeBaseArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the knowledge base. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeBaseId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>The language code value for the language in which the quick response is written.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who last updated the quick response search result data. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;+?:&#91;a-z-&#93;+?:&#91;a-z0-9-&#93;*?:(&#91;0-9&#93;&#123;12&#125;)?:&#91;a-zA-Z0-9-:/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the quick response search result data was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="quickResponseArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the quick response. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="quickResponseId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the quick response. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="shortcutKey" /></td>
    <td><code>string</code></td>
    <td>The shortcut key of the quick response. The value should be unique across the knowledge base.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The resource status of the quick response. (CREATE_IN_PROGRESS, CREATE_FAILED, CREATED, DELETE_IN_PROGRESS, DELETE_FAILED, DELETED, UPDATE_IN_PROGRESS, UPDATE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_quick_responses">

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
    <td>The name of the quick response.</td>
</tr>
<tr>
    <td><CopyableCode code="channels" /></td>
    <td><code>array</code></td>
    <td>The Amazon Connect contact channels this quick response applies to. The supported contact channel types include Chat.</td>
</tr>
<tr>
    <td><CopyableCode code="contentType" /></td>
    <td><code>string</code></td>
    <td>The media type of the quick response content. Use application/x.quickresponse;format=plain for quick response written in plain text. Use application/x.quickresponse;format=markdown for quick response written in richtext. (pattern: &lt;code&gt;(application/x\.quickresponse;format=(plain|markdown))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the quick response was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the quick response.</td>
</tr>
<tr>
    <td><CopyableCode code="isActive" /></td>
    <td><code>boolean</code></td>
    <td>Whether the quick response is active.</td>
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
    <td>The Amazon Resource Name (ARN) of the user who last updated the quick response data. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;+?:&#91;a-z-&#93;+?:&#91;a-z0-9-&#93;*?:(&#91;0-9&#93;&#123;12&#125;)?:&#91;a-zA-Z0-9-:/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the quick response summary was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="quickResponseArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the quick response. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="quickResponseId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the quick response. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The resource status of the quick response. (CREATE_IN_PROGRESS, CREATE_FAILED, CREATED, DELETE_IN_PROGRESS, DELETE_FAILED, DELETED, UPDATE_IN_PROGRESS, UPDATE_FAILED)</td>
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
    <td><a href="#get_quick_response"><CopyableCode code="get_quick_response" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-quick_response_id"><code>quick_response_id</code></a>, <a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the quick response.</td>
</tr>
<tr>
    <td><a href="#search_quick_responses"><CopyableCode code="search_quick_responses" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Searches existing Amazon Q in Connect quick responses in an Amazon Q in Connect knowledge base.</td>
</tr>
<tr>
    <td><a href="#list_quick_responses"><CopyableCode code="list_quick_responses" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists information about quick response.</td>
</tr>
<tr>
    <td><a href="#create_quick_response"><CopyableCode code="create_quick_response" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-content"><code>content</code></a></td>
    <td></td>
    <td>Creates an Amazon Q in Connect quick response.</td>
</tr>
<tr>
    <td><a href="#update_quick_response"><CopyableCode code="update_quick_response" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-quick_response_id"><code>quick_response_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing Amazon Q in Connect quick response.</td>
</tr>
<tr>
    <td><a href="#delete_quick_response"><CopyableCode code="delete_quick_response" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-quick_response_id"><code>quick_response_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a quick response.</td>
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
    <td>The knowledge base from which the quick response is deleted. The identifier of the knowledge base.</td>
</tr>
<tr id="parameter-quick_response_id">
    <td><CopyableCode code="quick_response_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the quick response to delete.</td>
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
    defaultValue="get_quick_response"
    values={[
        { label: 'get_quick_response', value: 'get_quick_response' },
        { label: 'search_quick_responses', value: 'search_quick_responses' },
        { label: 'list_quick_responses', value: 'list_quick_responses' }
    ]}
>
<TabItem value="get_quick_response">

Retrieves the quick response.

```sql
SELECT
name,
channels,
contentType,
contents,
createdTime,
description,
groupingConfiguration,
isActive,
knowledgeBaseArn,
knowledgeBaseId,
language,
lastModifiedBy,
lastModifiedTime,
quickResponseArn,
quickResponseId,
shortcutKey,
status,
tags
FROM aws.qconnect.quick_responses
WHERE quick_response_id = '{{ quick_response_id }}' -- required
AND knowledge_base_id = '{{ knowledge_base_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_quick_responses">

Searches existing Amazon Q in Connect quick responses in an Amazon Q in Connect knowledge base.

```sql
SELECT
name,
attributesInterpolated,
attributesNotInterpolated,
channels,
contentType,
contents,
createdTime,
description,
groupingConfiguration,
isActive,
knowledgeBaseArn,
knowledgeBaseId,
language,
lastModifiedBy,
lastModifiedTime,
quickResponseArn,
quickResponseId,
shortcutKey,
status,
tags
FROM aws.qconnect.quick_responses
WHERE knowledge_base_id = '{{ knowledge_base_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="list_quick_responses">

Lists information about quick response.

```sql
SELECT
name,
channels,
contentType,
createdTime,
description,
isActive,
knowledgeBaseArn,
knowledgeBaseId,
lastModifiedBy,
lastModifiedTime,
quickResponseArn,
quickResponseId,
status,
tags
FROM aws.qconnect.quick_responses
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
    defaultValue="create_quick_response"
    values={[
        { label: 'create_quick_response', value: 'create_quick_response' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_quick_response">

Creates an Amazon Q in Connect quick response.

```sql
INSERT INTO aws.qconnect.quick_responses (
name,
content,
contentType,
groupingConfiguration,
description,
shortcutKey,
isActive,
channels,
language,
clientToken,
tags,
knowledge_base_id,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ content }}' /* required */,
'{{ contentType }}',
'{{ groupingConfiguration }}',
'{{ description }}',
'{{ shortcutKey }}',
{{ isActive }},
'{{ channels }}',
'{{ language }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ knowledge_base_id }}',
'{{ region }}'
RETURNING
quickResponse
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: quick_responses
  props:
    - name: knowledge_base_id
      value: "{{ knowledge_base_id }}"
      description: Required parameter for the quick_responses resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the quick_responses resource.
    - name: name
      value: "{{ name }}"
    - name: content
      description: |
        The container of quick response data.
      value:
        content: "{{ content }}"
    - name: contentType
      value: "{{ contentType }}"
    - name: groupingConfiguration
      description: |
        The configuration information of the grouping of Amazon Q in Connect users.
      value:
        criteria: "{{ criteria }}"
        values:
          - "{{ values }}"
    - name: description
      value: "{{ description }}"
    - name: shortcutKey
      value: "{{ shortcutKey }}"
    - name: isActive
      value: {{ isActive }}
    - name: channels
      value:
        - "{{ channels }}"
    - name: language
      value: "{{ language }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_quick_response"
    values={[
        { label: 'update_quick_response', value: 'update_quick_response' }
    ]}
>
<TabItem value="update_quick_response">

Updates an existing Amazon Q in Connect quick response.

```sql
UPDATE aws.qconnect.quick_responses
SET 
name = '{{ name }}',
content = '{{ content }}',
contentType = '{{ contentType }}',
groupingConfiguration = '{{ groupingConfiguration }}',
removeGroupingConfiguration = {{ removeGroupingConfiguration }},
description = '{{ description }}',
removeDescription = {{ removeDescription }},
shortcutKey = '{{ shortcutKey }}',
removeShortcutKey = {{ removeShortcutKey }},
isActive = {{ isActive }},
channels = '{{ channels }}',
language = '{{ language }}'
WHERE 
knowledge_base_id = '{{ knowledge_base_id }}' --required
AND quick_response_id = '{{ quick_response_id }}' --required
AND region = '{{ region }}' --required
RETURNING
quickResponse;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_quick_response"
    values={[
        { label: 'delete_quick_response', value: 'delete_quick_response' }
    ]}
>
<TabItem value="delete_quick_response">

Deletes a quick response.

```sql
DELETE FROM aws.qconnect.quick_responses
WHERE knowledge_base_id = '{{ knowledge_base_id }}' --required
AND quick_response_id = '{{ quick_response_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
