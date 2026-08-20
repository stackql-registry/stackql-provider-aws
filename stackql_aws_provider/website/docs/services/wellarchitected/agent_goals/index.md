--- 
title: agent_goals
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_goals
  - wellarchitected
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

Creates, updates, deletes, gets or lists an <code>agent_goals</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_goals" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wellarchitected.agent_goals" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_agent_goal"
    values={[
        { label: 'get_agent_goal', value: 'get_agent_goal' },
        { label: 'list_agent_goals', value: 'list_agent_goals' }
    ]}
>
<TabItem value="get_agent_goal">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the goal. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the goal was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that created this goal.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the goal. (pattern: &lt;code&gt;(?:(?!\$\&#123;&#91;a-zA-Z&#93;+:)&#91;\P&#123;C&#125;&#93;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the goal was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that last modified this goal.</td>
</tr>
<tr>
    <td><CopyableCode code="pillars" /></td>
    <td><code>array</code></td>
    <td>The Well-Architected Tool Framework pillars associated with this goal.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the associated profile. (pattern: &lt;code&gt;arn:aws(&#91;a-z0-9-&#93;+)?:wellarchitected:&#91;a-z0-9-&#93;&#123;6,64&#125;:\d&#123;12&#125;:agent-profile/(&#91;a-zA-Z0-9_-&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The title of the goal. (pattern: &lt;code&gt;(?:(?!\$\&#123;&#91;a-zA-Z&#93;+:)&#91;\P&#123;C&#125;&#93;)+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_agent_goals">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the goal. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the goal was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that created this goal.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the goal. (pattern: &lt;code&gt;(?:(?!\$\&#123;&#91;a-zA-Z&#93;+:)&#91;\P&#123;C&#125;&#93;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the goal was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that last modified this goal.</td>
</tr>
<tr>
    <td><CopyableCode code="pillars" /></td>
    <td><code>array</code></td>
    <td>The Well-Architected Tool Framework pillars associated with this goal.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the associated profile. (pattern: &lt;code&gt;arn:aws(&#91;a-z0-9-&#93;+)?:wellarchitected:&#91;a-z0-9-&#93;&#123;6,64&#125;:\d&#123;12&#125;:agent-profile/(&#91;a-zA-Z0-9_-&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The title of the goal. (pattern: &lt;code&gt;(?:(?!\$\&#123;&#91;a-zA-Z&#93;+:)&#91;\P&#123;C&#125;&#93;)+&lt;/code&gt;)</td>
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
    <td><a href="#get_agent_goal"><CopyableCode code="get_agent_goal" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-profile_arn"><code>profile_arn</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific optimization goal.</td>
</tr>
<tr>
    <td><a href="#list_agent_goals"><CopyableCode code="list_agent_goals" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-profile_arn"><code>profile_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists optimization goals associated with a specified profile. Goals define specific targets and objectives for the optimization process.</td>
</tr>
<tr>
    <td><a href="#create_agent_goal"><CopyableCode code="create_agent_goal" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-profile_arn"><code>profile_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pillars"><code>pillars</code></a>, <a href="#parameter-title"><code>title</code></a></td>
    <td></td>
    <td>Creates an optimization goal associated with a profile. Goals define specific targets and objectives for the optimization process.</td>
</tr>
<tr>
    <td><a href="#update_agent_goal"><CopyableCode code="update_agent_goal" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-profile_arn"><code>profile_arn</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the pillars and title of an existing goal associated with a profile.</td>
</tr>
<tr>
    <td><a href="#delete_agent_goal"><CopyableCode code="delete_agent_goal" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-profile_arn"><code>profile_arn</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an optimization goal from a profile.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the goal to delete.</td>
</tr>
<tr id="parameter-profile_arn">
    <td><CopyableCode code="profile_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the profile containing the goal.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of goals to return in a single response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token returned from a previous call to continue retrieving results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_agent_goal"
    values={[
        { label: 'get_agent_goal', value: 'get_agent_goal' },
        { label: 'list_agent_goals', value: 'list_agent_goals' }
    ]}
>
<TabItem value="get_agent_goal">

Retrieves detailed information about a specific optimization goal.

```sql
SELECT
id,
created_at,
created_by,
description,
last_modified_at,
last_modified_by,
pillars,
profile_arn,
title_
FROM aws.wellarchitected.agent_goals
WHERE profile_arn = '{{ profile_arn }}' -- required
AND id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_agent_goals">

Lists optimization goals associated with a specified profile. Goals define specific targets and objectives for the optimization process.

```sql
SELECT
id,
created_at,
created_by,
description,
last_modified_at,
last_modified_by,
pillars,
profile_arn,
title_
FROM aws.wellarchitected.agent_goals
WHERE profile_arn = '{{ profile_arn }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_agent_goal"
    values={[
        { label: 'create_agent_goal', value: 'create_agent_goal' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_agent_goal">

Creates an optimization goal associated with a profile. Goals define specific targets and objectives for the optimization process.

```sql
INSERT INTO aws.wellarchitected.agent_goals (
clientToken,
pillars,
title,
description,
profile_arn,
region
)
SELECT 
'{{ clientToken }}',
'{{ pillars }}' /* required */,
'{{ title }}' /* required */,
'{{ description }}',
'{{ profile_arn }}',
'{{ region }}'
RETURNING
goal
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: agent_goals
  props:
    - name: profile_arn
      value: "{{ profile_arn }}"
      description: Required parameter for the agent_goals resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the agent_goals resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: pillars
      value:
        - "{{ pillars }}"
    - name: title
      value: "{{ title }}"
    - name: description
      value: "{{ description }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_agent_goal"
    values={[
        { label: 'update_agent_goal', value: 'update_agent_goal' }
    ]}
>
<TabItem value="update_agent_goal">

Updates the pillars and title of an existing goal associated with a profile.

```sql
UPDATE aws.wellarchitected.agent_goals
SET 
clientToken = '{{ clientToken }}',
pillars = '{{ pillars }}',
title = '{{ title }}',
description = '{{ description }}'
WHERE 
profile_arn = '{{ profile_arn }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required
RETURNING
goal;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_agent_goal"
    values={[
        { label: 'delete_agent_goal', value: 'delete_agent_goal' }
    ]}
>
<TabItem value="delete_agent_goal">

Deletes an optimization goal from a profile.

```sql
DELETE FROM aws.wellarchitected.agent_goals
WHERE profile_arn = '{{ profile_arn }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
