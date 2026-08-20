--- 
title: assertions
hide_title: false
hide_table_of_contents: false
keywords:
  - assertions
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

Creates, updates, deletes, gets or lists an <code>assertions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assertions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehubv2.assertions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_assertions"
    values={[
        { label: 'list_assertions', value: 'list_assertions' }
    ]}
>
<TabItem value="list_assertions">

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
    <td><CopyableCode code="assertion_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the assertion. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-5&#93;&#91;0-9a-f&#93;&#123;3&#125;-&#91;089ab&#93;&#91;0-9a-f&#93;&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the assertion was created.</td>
</tr>
<tr>
    <td><CopyableCode code="service_arn" /></td>
    <td><code>string</code></td>
    <td>ARN identifier. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The source of the assertion, indicating whether it was AI-generated or created by a user. (AI_GENERATED, USER)</td>
</tr>
<tr>
    <td><CopyableCode code="text" /></td>
    <td><code>string</code></td>
    <td>The text content of the assertion.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the assertion was last updated.</td>
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
    <td><a href="#list_assertions"><CopyableCode code="list_assertions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-source"><code>source</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists resilience assertions for a service.</td>
</tr>
<tr>
    <td><a href="#create_assertion"><CopyableCode code="create_assertion" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-text"><code>text</code></a></td>
    <td></td>
    <td>Creates a resilience assertion for a service.</td>
</tr>
<tr>
    <td><a href="#update_assertion"><CopyableCode code="update_assertion" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-assertionId"><code>assertionId</code></a></td>
    <td></td>
    <td>Updates a resilience assertion.</td>
</tr>
<tr>
    <td><a href="#delete_assertion"><CopyableCode code="delete_assertion" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a resilience assertion from a service.</td>
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
<tr id="parameter-serviceArn">
    <td><CopyableCode code="serviceArn" /></td>
    <td><code>string</code></td>
    <td></td>
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
<tr id="parameter-source">
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>Filter assertions by source type.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_assertions"
    values={[
        { label: 'list_assertions', value: 'list_assertions' }
    ]}
>
<TabItem value="list_assertions">

Lists resilience assertions for a service.

```sql
SELECT
assertion_id,
created_at,
service_arn,
source,
text,
updated_at
FROM aws.resiliencehubv2.assertions
WHERE serviceArn = '{{ serviceArn }}' -- required
AND region = '{{ region }}' -- required
AND source = '{{ source }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_assertion"
    values={[
        { label: 'create_assertion', value: 'create_assertion' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_assertion">

Creates a resilience assertion for a service.

```sql
INSERT INTO aws.resiliencehubv2.assertions (
serviceArn,
text,
clientToken,
region
)
SELECT 
'{{ serviceArn }}' /* required */,
'{{ text }}' /* required */,
'{{ clientToken }}',
'{{ region }}'
RETURNING
assertion
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: assertions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the assertions resource.
    - name: serviceArn
      value: "{{ serviceArn }}"
      description: |
        ARN identifier.
    - name: text
      value: "{{ text }}"
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Idempotency token.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_assertion"
    values={[
        { label: 'update_assertion', value: 'update_assertion' }
    ]}
>
<TabItem value="update_assertion">

Updates a resilience assertion.

```sql
UPDATE aws.resiliencehubv2.assertions
SET 
serviceArn = '{{ serviceArn }}',
assertionId = '{{ assertionId }}',
text = '{{ text }}'
WHERE 
region = '{{ region }}' --required
AND serviceArn = '{{ serviceArn }}' --required
AND assertionId = '{{ assertionId }}' --required
RETURNING
assertion;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_assertion"
    values={[
        { label: 'delete_assertion', value: 'delete_assertion' }
    ]}
>
<TabItem value="delete_assertion">

Deletes a resilience assertion from a service.

```sql
DELETE FROM aws.resiliencehubv2.assertions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
