--- 
title: chat_controls_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - chat_controls_configurations
  - qbusiness
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

Creates, updates, deletes, gets or lists a <code>chat_controls_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="chat_controls_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qbusiness.chat_controls_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_chat_controls_configuration"
    values={[
        { label: 'get_chat_controls_configuration', value: 'get_chat_controls_configuration' }
    ]}
>
<TabItem value="get_chat_controls_configuration">

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
    <td>A name for your topic control configuration. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;&#123;0,35&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description for your topic control configuration. Use this to outline how the large language model (LLM) should use this topic control configuration. (pattern: &lt;code&gt;\P&#123;C&#125;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="example_chat_messages" /></td>
    <td><code>array</code></td>
    <td>A list of example phrases that you expect the end user to use in relation to the topic.</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>Rules defined for a topic configuration.</td>
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
    <td><a href="#get_chat_controls_configuration"><CopyableCode code="get_chat_controls_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Gets information about chat controls configured for an existing Amazon Q Business application.</td>
</tr>
<tr>
    <td><a href="#update_chat_controls_configuration"><CopyableCode code="update_chat_controls_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a set of chat controls configured for an existing Amazon Q Business application.</td>
</tr>
<tr>
    <td><a href="#delete_chat_controls_configuration"><CopyableCode code="delete_chat_controls_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes chat controls configured for an existing Amazon Q Business application.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the application the chat controls have been configured for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of configured chat controls to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the maxResults response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business chat controls configured.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_chat_controls_configuration"
    values={[
        { label: 'get_chat_controls_configuration', value: 'get_chat_controls_configuration' }
    ]}
>
<TabItem value="get_chat_controls_configuration">

Gets information about chat controls configured for an existing Amazon Q Business application.

```sql
SELECT
name,
description,
example_chat_messages,
rules
FROM aws.qbusiness.chat_controls_configurations
WHERE application_id = '{{ application_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_chat_controls_configuration"
    values={[
        { label: 'update_chat_controls_configuration', value: 'update_chat_controls_configuration' }
    ]}
>
<TabItem value="update_chat_controls_configuration">

Updates a set of chat controls configured for an existing Amazon Q Business application.

```sql
UPDATE aws.qbusiness.chat_controls_configurations
SET 
clientToken = '{{ clientToken }}',
responseScope = '{{ responseScope }}',
orchestrationConfiguration = '{{ orchestrationConfiguration }}',
blockedPhrasesConfigurationUpdate = '{{ blockedPhrasesConfigurationUpdate }}',
topicConfigurationsToCreateOrUpdate = '{{ topicConfigurationsToCreateOrUpdate }}',
topicConfigurationsToDelete = '{{ topicConfigurationsToDelete }}',
creatorModeConfiguration = '{{ creatorModeConfiguration }}',
hallucinationReductionConfiguration = '{{ hallucinationReductionConfiguration }}'
WHERE 
application_id = '{{ application_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_chat_controls_configuration"
    values={[
        { label: 'delete_chat_controls_configuration', value: 'delete_chat_controls_configuration' }
    ]}
>
<TabItem value="delete_chat_controls_configuration">

Deletes chat controls configured for an existing Amazon Q Business application.

```sql
DELETE FROM aws.qbusiness.chat_controls_configurations
WHERE application_id = '{{ application_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
