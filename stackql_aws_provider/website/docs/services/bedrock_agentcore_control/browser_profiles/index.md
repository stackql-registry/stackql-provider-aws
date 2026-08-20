--- 
title: browser_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - browser_profiles
  - bedrock_agentcore_control
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

Creates, updates, deletes, gets or lists a <code>browser_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="browser_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.browser_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_browser_profile"
    values={[
        { label: 'get_browser_profile', value: 'get_browser_profile' },
        { label: 'list_browser_profiles', value: 'list_browser_profiles' }
    ]}
>
<TabItem value="get_browser_profile">

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
    <td>The name of the browser profile. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the browser profile was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the browser profile.</td>
</tr>
<tr>
    <td><CopyableCode code="last_saved_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when browser session data was last saved to this profile.</td>
</tr>
<tr>
    <td><CopyableCode code="last_saved_browser_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the browser from which data was last saved to this profile. (pattern: &lt;code&gt;(aws\.browser\.v1|&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_saved_browser_session_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the browser session from which data was last saved to this profile. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;1,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the browser profile was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the browser profile. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:browser-profile/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="profile_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the browser profile. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the browser profile. (READY, DELETING, DELETED, SAVING)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_browser_profiles">

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
    <td>The name of the browser profile. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the browser profile was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the browser profile.</td>
</tr>
<tr>
    <td><CopyableCode code="last_saved_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when browser session data was last saved to this profile.</td>
</tr>
<tr>
    <td><CopyableCode code="last_saved_browser_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the browser from which data was last saved to this profile. (pattern: &lt;code&gt;(aws\.browser\.v1|&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_saved_browser_session_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the browser session from which data was last saved to this profile. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;1,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the browser profile was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the browser profile. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:browser-profile/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="profile_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the browser profile. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the browser profile. Possible values include READY, SAVING, DELETING, and DELETED. (READY, DELETING, DELETED, SAVING)</td>
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
    <td><a href="#get_browser_profile"><CopyableCode code="get_browser_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-profile_id"><code>profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a browser profile.</td>
</tr>
<tr>
    <td><a href="#list_browser_profiles"><CopyableCode code="list_browser_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all browser profiles in your account.</td>
</tr>
<tr>
    <td><a href="#create_browser_profile"><CopyableCode code="create_browser_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a browser profile in Amazon Bedrock AgentCore. A browser profile stores persistent browser data such as cookies, local storage, session storage, and browsing history that can be saved from browser sessions and reused in subsequent sessions.</td>
</tr>
<tr>
    <td><a href="#delete_browser_profile"><CopyableCode code="delete_browser_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-profile_id"><code>profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes a browser profile.</td>
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
<tr id="parameter-profile_id">
    <td><CopyableCode code="profile_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the browser profile to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier to ensure idempotency of the request.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_browser_profile"
    values={[
        { label: 'get_browser_profile', value: 'get_browser_profile' },
        { label: 'list_browser_profiles', value: 'list_browser_profiles' }
    ]}
>
<TabItem value="get_browser_profile">

Gets information about a browser profile.

```sql
SELECT
name,
created_at,
description,
last_saved_at,
last_saved_browser_id,
last_saved_browser_session_id,
last_updated_at,
profile_arn,
profile_id,
status
FROM aws.bedrock_agentcore_control.browser_profiles
WHERE profile_id = '{{ profile_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_browser_profiles">

Lists all browser profiles in your account.

```sql
SELECT
name,
created_at,
description,
last_saved_at,
last_saved_browser_id,
last_saved_browser_session_id,
last_updated_at,
profile_arn,
profile_id,
status
FROM aws.bedrock_agentcore_control.browser_profiles
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_browser_profile"
    values={[
        { label: 'create_browser_profile', value: 'create_browser_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_browser_profile">

Creates a browser profile in Amazon Bedrock AgentCore. A browser profile stores persistent browser data such as cookies, local storage, session storage, and browsing history that can be saved from browser sessions and reused in subsequent sessions.

```sql
INSERT INTO aws.bedrock_agentcore_control.browser_profiles (
name,
description,
clientToken,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
created_at,
profile_arn,
profile_id,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: browser_profiles
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the browser_profiles resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_browser_profile"
    values={[
        { label: 'delete_browser_profile', value: 'delete_browser_profile' }
    ]}
>
<TabItem value="delete_browser_profile">

Deletes a browser profile.

```sql
DELETE FROM aws.bedrock_agentcore_control.browser_profiles
WHERE profile_id = '{{ profile_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
