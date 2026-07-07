--- 
title: plugin_type_metadatas
hide_title: false
hide_table_of_contents: false
keywords:
  - plugin_type_metadatas
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

Creates, updates, deletes, gets or lists a <code>plugin_type_metadatas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="plugin_type_metadatas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qbusiness.plugin_type_metadatas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_plugin_type_metadata"
    values={[
        { label: 'list_plugin_type_metadata', value: 'list_plugin_type_metadata' }
    ]}
>
<TabItem value="list_plugin_type_metadata">

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
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>The category of the plugin type. (Customer relationship management (CRM), Project management, Communication, Productivity, Ticketing and incident management)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description assigned by Amazon Q Business to a plugin. You can't modify this value.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the plugin. (SERVICE_NOW, SALESFORCE, JIRA, ZENDESK, CUSTOM, QUICKSIGHT, SERVICENOW_NOW_PLATFORM, JIRA_CLOUD, SALESFORCE_CRM, ZENDESK_SUITE, ATLASSIAN_CONFLUENCE, GOOGLE_CALENDAR, MICROSOFT_TEAMS, MICROSOFT_EXCHANGE, PAGERDUTY_ADVANCE, SMARTSHEET, ASANA)</td>
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
    <td><a href="#list_plugin_type_metadata"><CopyableCode code="list_plugin_type_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists metadata for all Amazon Q Business plugin types.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of plugin metadata items to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the metadata returned exceeds maxResults, Amazon Q Business returns a next token as a pagination token to retrieve the next set of metadata.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_plugin_type_metadata"
    values={[
        { label: 'list_plugin_type_metadata', value: 'list_plugin_type_metadata' }
    ]}
>
<TabItem value="list_plugin_type_metadata">

Lists metadata for all Amazon Q Business plugin types.

```sql
SELECT
category,
description,
type_
FROM aws.qbusiness.plugin_type_metadatas
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
