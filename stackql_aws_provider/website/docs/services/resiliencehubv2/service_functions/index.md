--- 
title: service_functions
hide_title: false
hide_table_of_contents: false
keywords:
  - service_functions
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

Creates, updates, deletes, gets or lists a <code>service_functions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_functions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehubv2.service_functions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_service_functions"
    values={[
        { label: 'list_service_functions', value: 'list_service_functions' }
    ]}
>
<TabItem value="list_service_functions">

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
    <td>The timestamp when the service function was created.</td>
</tr>
<tr>
    <td><CopyableCode code="criticality" /></td>
    <td><code>string</code></td>
    <td>The criticality level of the service function. (PRIMARY, SUPPLEMENTAL)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Resource description.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_count" /></td>
    <td><code>integer</code></td>
    <td>The number of resources associated with the service function.</td>
</tr>
<tr>
    <td><CopyableCode code="service_arn" /></td>
    <td><code>string</code></td>
    <td>ARN identifier. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="service_function_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the service function. (pattern: &lt;code&gt;\S&#123;1,255&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The source of the service function. (AI_GENERATED, USER)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the service function was last updated.</td>
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
    <td><a href="#list_service_functions"><CopyableCode code="list_service_functions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists service functions for a service.</td>
</tr>
<tr>
    <td><a href="#create_service_function"><CopyableCode code="create_service_function" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-criticality"><code>criticality</code></a></td>
    <td></td>
    <td>Creates a service function within a service.</td>
</tr>
<tr>
    <td><a href="#update_service_function"><CopyableCode code="update_service_function" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-serviceFunctionId"><code>serviceFunctionId</code></a></td>
    <td></td>
    <td>Updates a service function.</td>
</tr>
<tr>
    <td><a href="#delete_service_function"><CopyableCode code="delete_service_function" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a service function.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_service_functions"
    values={[
        { label: 'list_service_functions', value: 'list_service_functions' }
    ]}
>
<TabItem value="list_service_functions">

Lists service functions for a service.

```sql
SELECT
name,
created_at,
criticality,
description,
resource_count,
service_arn,
service_function_id,
source,
updated_at
FROM aws.resiliencehubv2.service_functions
WHERE serviceArn = '{{ serviceArn }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_service_function"
    values={[
        { label: 'create_service_function', value: 'create_service_function' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_service_function">

Creates a service function within a service.

```sql
INSERT INTO aws.resiliencehubv2.service_functions (
name,
serviceArn,
description,
criticality,
clientToken,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ serviceArn }}' /* required */,
'{{ description }}',
'{{ criticality }}' /* required */,
'{{ clientToken }}',
'{{ region }}'
RETURNING
service_function
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: service_functions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the service_functions resource.
    - name: name
      value: "{{ name }}"
      description: |
        Entity label (not part of ARN — spaces allowed).
    - name: serviceArn
      value: "{{ serviceArn }}"
      description: |
        ARN identifier.
    - name: description
      value: "{{ description }}"
      description: |
        Resource description.
    - name: criticality
      value: "{{ criticality }}"
      valid_values: ['PRIMARY', 'SUPPLEMENTAL']
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Idempotency token.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_service_function"
    values={[
        { label: 'update_service_function', value: 'update_service_function' }
    ]}
>
<TabItem value="update_service_function">

Updates a service function.

```sql
UPDATE aws.resiliencehubv2.service_functions
SET 
serviceArn = '{{ serviceArn }}',
serviceFunctionId = '{{ serviceFunctionId }}',
name = '{{ name }}',
description = '{{ description }}',
criticality = '{{ criticality }}'
WHERE 
region = '{{ region }}' --required
AND serviceArn = '{{ serviceArn }}' --required
AND serviceFunctionId = '{{ serviceFunctionId }}' --required
RETURNING
service_function;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_service_function"
    values={[
        { label: 'delete_service_function', value: 'delete_service_function' }
    ]}
>
<TabItem value="delete_service_function">

Deletes a service function.

```sql
DELETE FROM aws.resiliencehubv2.service_functions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
