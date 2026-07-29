--- 
title: q_app_session_metadatas
hide_title: false
hide_table_of_contents: false
keywords:
  - q_app_session_metadatas
  - qapps
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

Creates, updates, deletes, gets or lists a <code>q_app_session_metadatas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="q_app_session_metadatas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qapps.q_app_session_metadatas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_q_app_session_metadata"
    values={[
        { label: 'get_q_app_session_metadata', value: 'get_q_app_session_metadata' }
    ]}
>
<TabItem value="get_q_app_session_metadata">

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
    <td><CopyableCode code="session_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Q App session.</td>
</tr>
<tr>
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Q App session. (pattern: &lt;code&gt;&#91;\da-f&#93;&#123;8&#125;-&#91;\da-f&#93;&#123;4&#125;-&#91;45&#93;&#91;\da-f&#93;&#123;3&#125;-&#91;89ABab&#93;&#91;\da-f&#93;&#123;3&#125;-&#91;\da-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="session_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Q App session.</td>
</tr>
<tr>
    <td><CopyableCode code="session_owner" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the current user is the owner of the Q App session.</td>
</tr>
<tr>
    <td><CopyableCode code="sharing_configuration" /></td>
    <td><code>object</code></td>
    <td>The sharing configuration of the Q App data collection session.</td>
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
    <td><a href="#get_q_app_session_metadata"><CopyableCode code="get_q_app_session_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance-id"><code>instance-id</code></a>, <a href="#parameter-sessionId"><code>sessionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the current configuration of a Q App session.</td>
</tr>
<tr>
    <td><a href="#update_q_app_session_metadata"><CopyableCode code="update_q_app_session_metadata" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance-id"><code>instance-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sessionId"><code>sessionId</code></a>, <a href="#parameter-sharingConfiguration"><code>sharingConfiguration</code></a></td>
    <td></td>
    <td>Updates the configuration metadata of a session for a given Q App sessionId.</td>
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
<tr id="parameter-instance-id">
    <td><CopyableCode code="instance-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Amazon Q Business application environment instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-sessionId">
    <td><CopyableCode code="sessionId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Q App session.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_q_app_session_metadata"
    values={[
        { label: 'get_q_app_session_metadata', value: 'get_q_app_session_metadata' }
    ]}
>
<TabItem value="get_q_app_session_metadata">

Retrieves the current configuration of a Q App session.

```sql
SELECT
session_arn,
session_id,
session_name,
session_owner,
sharing_configuration
FROM aws.qapps.q_app_session_metadatas
WHERE `instance-id` = '{{ instance-id }}' -- required
AND sessionId = '{{ sessionId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_q_app_session_metadata"
    values={[
        { label: 'update_q_app_session_metadata', value: 'update_q_app_session_metadata' }
    ]}
>
<TabItem value="update_q_app_session_metadata">

Updates the configuration metadata of a session for a given Q App sessionId.

```sql
UPDATE aws.qapps.q_app_session_metadatas
SET 
sessionId = '{{ sessionId }}',
sessionName = '{{ sessionName }}',
sharingConfiguration = '{{ sharingConfiguration }}'
WHERE 
`instance-id` = '{{ instance-id }}' --required
AND region = '{{ region }}' --required
AND sessionId = '{{ sessionId }}' --required
AND sharingConfiguration = '{{ sharingConfiguration }}' --required
RETURNING
session_arn,
session_id,
session_name,
sharing_configuration;
```
</TabItem>
</Tabs>
