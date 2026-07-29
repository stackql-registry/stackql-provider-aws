--- 
title: usage_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - usage_plans
  - apigateway
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

Creates, updates, deletes, gets or lists a <code>usage_plans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="usage_plans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigateway.usage_plans" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_usage_plan"
    values={[
        { label: 'get_usage_plan', value: 'get_usage_plan' },
        { label: 'get_usage_plans', value: 'get_usage_plans' }
    ]}
>
<TabItem value="get_usage_plan">

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
    <td>The identifier of a UsagePlan resource.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of a usage plan.</td>
</tr>
<tr>
    <td><CopyableCode code="api_stages" /></td>
    <td><code>array</code></td>
    <td>The associated API stages of a usage plan.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of a usage plan.</td>
</tr>
<tr>
    <td><CopyableCode code="product_code" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Marketplace product identifier to associate with the usage plan as a SaaS product on the Amazon Web Services Marketplace.</td>
</tr>
<tr>
    <td><CopyableCode code="quota" /></td>
    <td><code>object</code></td>
    <td>Quotas configured for a usage plan.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The collection of tags. Each tag element is associated with a given resource.</td>
</tr>
<tr>
    <td><CopyableCode code="throttle" /></td>
    <td><code>object</code></td>
    <td>The API request rate limits.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_usage_plans">

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
    <td>The identifier of a UsagePlan resource.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of a usage plan.</td>
</tr>
<tr>
    <td><CopyableCode code="api_stages" /></td>
    <td><code>array</code></td>
    <td>The associated API stages of a usage plan.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of a usage plan.</td>
</tr>
<tr>
    <td><CopyableCode code="product_code" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Marketplace product identifier to associate with the usage plan as a SaaS product on the Amazon Web Services Marketplace.</td>
</tr>
<tr>
    <td><CopyableCode code="quota" /></td>
    <td><code>object</code></td>
    <td>Quotas configured for a usage plan.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The collection of tags. Each tag element is associated with a given resource.</td>
</tr>
<tr>
    <td><CopyableCode code="throttle" /></td>
    <td><code>object</code></td>
    <td>The API request rate limits.</td>
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
    <td><a href="#get_usage_plan"><CopyableCode code="get_usage_plan" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-usageplan_id"><code>usageplan_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a usage plan of a given plan identifier.</td>
</tr>
<tr>
    <td><a href="#get_usage_plans"><CopyableCode code="get_usage_plans" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-position"><code>position</code></a>, <a href="#parameter-keyId"><code>keyId</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Gets all the usage plans of the caller's account.</td>
</tr>
<tr>
    <td><a href="#create_usage_plan"><CopyableCode code="create_usage_plan" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a usage plan with the throttle and quota limits, as well as the associated API stages, specified in the payload.</td>
</tr>
<tr>
    <td><a href="#update_usage_plan"><CopyableCode code="update_usage_plan" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-usageplan_id"><code>usageplan_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a usage plan of a given plan Id.</td>
</tr>
<tr>
    <td><a href="#delete_usage_plan"><CopyableCode code="delete_usage_plan" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-usageplan_id"><code>usageplan_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a usage plan of a given plan Id.</td>
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
<tr id="parameter-usageplan_id">
    <td><CopyableCode code="usageplan_id" /></td>
    <td><code>string</code></td>
    <td>The Id of the to-be-deleted usage plan.</td>
</tr>
<tr id="parameter-keyId">
    <td><CopyableCode code="keyId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the API key associated with the usage plans.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</td>
</tr>
<tr id="parameter-position">
    <td><CopyableCode code="position" /></td>
    <td><code>string</code></td>
    <td>The current pagination position in the paged result set.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_usage_plan"
    values={[
        { label: 'get_usage_plan', value: 'get_usage_plan' },
        { label: 'get_usage_plans', value: 'get_usage_plans' }
    ]}
>
<TabItem value="get_usage_plan">

Gets a usage plan of a given plan identifier.

```sql
SELECT
id,
name,
api_stages,
description,
product_code,
quota,
tags,
throttle
FROM aws.apigateway.usage_plans
WHERE usageplan_id = '{{ usageplan_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_usage_plans">

Gets all the usage plans of the caller's account.

```sql
SELECT
id,
name,
api_stages,
description,
product_code,
quota,
tags,
throttle
FROM aws.apigateway.usage_plans
WHERE region = '{{ region }}' -- required
AND position = '{{ position }}'
AND keyId = '{{ keyId }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_usage_plan"
    values={[
        { label: 'create_usage_plan', value: 'create_usage_plan' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_usage_plan">

Creates a usage plan with the throttle and quota limits, as well as the associated API stages, specified in the payload.

```sql
INSERT INTO aws.apigateway.usage_plans (
name,
description,
apiStages,
throttle,
quota,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ apiStages }}',
'{{ throttle }}',
'{{ quota }}',
'{{ tags }}',
'{{ region }}'
RETURNING
id,
name,
api_stages,
description,
product_code,
quota,
tags,
throttle
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: usage_plans
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the usage_plans resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: apiStages
      value:
        - apiId: "{{ apiId }}"
          stage: "{{ stage }}"
          throttle: "{{ throttle }}"
    - name: throttle
      description: |
        The API request rate limits.
      value:
        burstLimit: {{ burstLimit }}
        rateLimit: {{ rateLimit }}
    - name: quota
      description: |
        Quotas configured for a usage plan.
      value:
        limit: {{ limit }}
        offset: {{ offset }}
        period: "{{ period }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_usage_plan"
    values={[
        { label: 'update_usage_plan', value: 'update_usage_plan' }
    ]}
>
<TabItem value="update_usage_plan">

Updates a usage plan of a given plan Id.

```sql
UPDATE aws.apigateway.usage_plans
SET 
patchOperations = '{{ patchOperations }}'
WHERE 
usageplan_id = '{{ usageplan_id }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
api_stages,
description,
product_code,
quota,
tags,
throttle;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_usage_plan"
    values={[
        { label: 'delete_usage_plan', value: 'delete_usage_plan' }
    ]}
>
<TabItem value="delete_usage_plan">

Deletes a usage plan of a given plan Id.

```sql
DELETE FROM aws.apigateway.usage_plans
WHERE usageplan_id = '{{ usageplan_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
