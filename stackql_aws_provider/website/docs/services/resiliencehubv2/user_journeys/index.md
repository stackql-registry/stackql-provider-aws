--- 
title: user_journeys
hide_title: false
hide_table_of_contents: false
keywords:
  - user_journeys
  - resiliencehubv2
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

Creates, updates, deletes, gets or lists a <code>user_journeys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_journeys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehubv2.user_journeys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_user_journey"
    values={[
        { label: 'get_user_journey', value: 'get_user_journey' },
        { label: 'list_user_journeys', value: 'list_user_journeys' }
    ]}
>
<TabItem value="get_user_journey">

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
    <td>Entity label (not part of ARN — spaces allowed). (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9 _\-&#93;&#123;1,59&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the user journey was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Resource description.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>ARN identifier. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the user journey was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="user_journey_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the user journey. (pattern: &lt;code&gt;\S&#123;1,255&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_user_journeys">

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
    <td>Entity label (not part of ARN — spaces allowed). (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9 _\-&#93;&#123;1,59&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the user journey was created.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the user journey was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="user_journey_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the user journey. (pattern: &lt;code&gt;\S&#123;1,255&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_user_journey"><CopyableCode code="get_user_journey" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-systemArn"><code>systemArn</code></a>, <a href="#parameter-userJourneyId"><code>userJourneyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a user journey.</td>
</tr>
<tr>
    <td><a href="#list_user_journeys"><CopyableCode code="list_user_journeys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-systemArn"><code>systemArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists user journeys for a system.</td>
</tr>
<tr>
    <td><a href="#create_user_journey"><CopyableCode code="create_user_journey" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-systemArn"><code>systemArn</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a user journey within a system.</td>
</tr>
<tr>
    <td><a href="#update_user_journey"><CopyableCode code="update_user_journey" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-systemArn"><code>systemArn</code></a>, <a href="#parameter-userJourneyId"><code>userJourneyId</code></a></td>
    <td></td>
    <td>Updates an existing user journey.</td>
</tr>
<tr>
    <td><a href="#delete_user_journey"><CopyableCode code="delete_user_journey" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a user journey.</td>
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
<tr id="parameter-systemArn">
    <td><CopyableCode code="systemArn" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-userJourneyId">
    <td><CopyableCode code="userJourneyId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user journey to retrieve.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_user_journey"
    values={[
        { label: 'get_user_journey', value: 'get_user_journey' },
        { label: 'list_user_journeys', value: 'list_user_journeys' }
    ]}
>
<TabItem value="get_user_journey">

Retrieves a user journey.

```sql
SELECT
name,
created_at,
description,
policy_arn,
updated_at,
user_journey_id
FROM aws.resiliencehubv2.user_journeys
WHERE systemArn = '{{ systemArn }}' -- required
AND userJourneyId = '{{ userJourneyId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_user_journeys">

Lists user journeys for a system.

```sql
SELECT
name,
created_at,
updated_at,
user_journey_id
FROM aws.resiliencehubv2.user_journeys
WHERE systemArn = '{{ systemArn }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_user_journey"
    values={[
        { label: 'create_user_journey', value: 'create_user_journey' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_user_journey">

Creates a user journey within a system.

```sql
INSERT INTO aws.resiliencehubv2.user_journeys (
systemArn,
name,
description,
policyArn,
clientToken,
region
)
SELECT 
'{{ systemArn }}' /* required */,
'{{ name }}' /* required */,
'{{ description }}',
'{{ policyArn }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
user_journey
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: user_journeys
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the user_journeys resource.
    - name: systemArn
      value: "{{ systemArn }}"
      description: |
        ARN identifier.
    - name: name
      value: "{{ name }}"
      description: |
        Entity label (not part of ARN — spaces allowed).
    - name: description
      value: "{{ description }}"
      description: |
        Resource description.
    - name: policyArn
      value: "{{ policyArn }}"
      description: |
        ARN identifier.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Idempotency token.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_user_journey"
    values={[
        { label: 'update_user_journey', value: 'update_user_journey' }
    ]}
>
<TabItem value="update_user_journey">

Updates an existing user journey.

```sql
UPDATE aws.resiliencehubv2.user_journeys
SET 
systemArn = '{{ systemArn }}',
userJourneyId = '{{ userJourneyId }}',
name = '{{ name }}',
description = '{{ description }}',
policyArn = '{{ policyArn }}'
WHERE 
region = '{{ region }}' --required
AND systemArn = '{{ systemArn }}' --required
AND userJourneyId = '{{ userJourneyId }}' --required
RETURNING
user_journey;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_user_journey"
    values={[
        { label: 'delete_user_journey', value: 'delete_user_journey' }
    ]}
>
<TabItem value="delete_user_journey">

Deletes a user journey.

```sql
DELETE FROM aws.resiliencehubv2.user_journeys
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
