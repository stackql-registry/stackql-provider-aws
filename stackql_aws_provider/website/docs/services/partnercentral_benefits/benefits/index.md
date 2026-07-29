--- 
title: benefits
hide_title: false
hide_table_of_contents: false
keywords:
  - benefits
  - partnercentral_benefits
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

Creates, updates, deletes, gets or lists a <code>benefits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="benefits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.partnercentral_benefits.benefits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_benefit"
    values={[
        { label: 'get_benefit', value: 'get_benefit' },
        { label: 'list_benefits', value: 'list_benefits' }
    ]}
>
<TabItem value="get_benefit">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the benefit.</td>
</tr>
<tr>
    <td><CopyableCode code="benefit_request_schema" /></td>
    <td><code>object</code></td>
    <td>The schema definition that describes the required fields for requesting this benefit.</td>
</tr>
<tr>
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>The catalog identifier that the benefit belongs to. (pattern: &lt;code&gt;&#91;A-Za-z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A detailed description of the benefit and its purpose.</td>
</tr>
<tr>
    <td><CopyableCode code="fulfillment_types" /></td>
    <td><code>array</code></td>
    <td>The available fulfillment types for this benefit (e.g., credits, access, disbursement).</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the benefit. (pattern: &lt;code&gt;ben-&#91;0-9a-z&#93;&#123;14&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the benefit.</td>
</tr>
<tr>
    <td><CopyableCode code="programs" /></td>
    <td><code>array</code></td>
    <td>The AWS partner programs that this benefit is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the benefit (e.g., active, inactive, deprecated). (ACTIVE, INACTIVE)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_benefits">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the benefit.</td>
</tr>
<tr>
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>The catalog identifier that the benefit belongs to. (pattern: &lt;code&gt;&#91;A-Za-z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A brief description of the benefit and its purpose.</td>
</tr>
<tr>
    <td><CopyableCode code="fulfillment_types" /></td>
    <td><code>array</code></td>
    <td>The available fulfillment types for this benefit.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the benefit. (pattern: &lt;code&gt;ben-&#91;0-9a-z&#93;&#123;14&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the benefit.</td>
</tr>
<tr>
    <td><CopyableCode code="programs" /></td>
    <td><code>array</code></td>
    <td>The AWS partner programs that this benefit is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the benefit. (ACTIVE, INACTIVE)</td>
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
    <td><a href="#get_benefit"><CopyableCode code="get_benefit" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific benefit available in the partner catalog.</td>
</tr>
<tr>
    <td><a href="#list_benefits"><CopyableCode code="list_benefits" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a paginated list of available benefits based on specified filter criteria.</td>
</tr>
<tr>
    <td><a href="#cancel_benefit_application"><CopyableCode code="cancel_benefit_application" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-Identifier"><code>Identifier</code></a></td>
    <td></td>
    <td>Cancels a benefit application that is currently in progress, preventing further processing.</td>
</tr>
<tr>
    <td><a href="#submit_benefit_application"><CopyableCode code="submit_benefit_application" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Identifier"><code>Identifier</code></a></td>
    <td></td>
    <td>Submits a benefit application for review and processing by AWS.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_benefit"
    values={[
        { label: 'get_benefit', value: 'get_benefit' },
        { label: 'list_benefits', value: 'list_benefits' }
    ]}
>
<TabItem value="get_benefit">

Retrieves detailed information about a specific benefit available in the partner catalog.

```sql
SELECT
arn,
benefit_request_schema,
catalog,
description,
fulfillment_types,
id,
name,
programs,
status
FROM aws.partnercentral_benefits.benefits
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_benefits">

Retrieves a paginated list of available benefits based on specified filter criteria.

```sql
SELECT
arn,
catalog,
description,
fulfillment_types,
id,
name,
programs,
status
FROM aws.partnercentral_benefits.benefits
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_benefit_application"
    values={[
        { label: 'cancel_benefit_application', value: 'cancel_benefit_application' },
        { label: 'submit_benefit_application', value: 'submit_benefit_application' }
    ]}
>
<TabItem value="cancel_benefit_application">

Cancels a benefit application that is currently in progress, preventing further processing.

```sql
EXEC aws.partnercentral_benefits.benefits.cancel_benefit_application 
@region='{{ region }}' --required 
@@json=
'{
"Catalog": "{{ Catalog }}", 
"ClientToken": "{{ ClientToken }}", 
"Identifier": "{{ Identifier }}", 
"Reason": "{{ Reason }}"
}'
;
```
</TabItem>
<TabItem value="submit_benefit_application">

Submits a benefit application for review and processing by AWS.

```sql
EXEC aws.partnercentral_benefits.benefits.submit_benefit_application 
@region='{{ region }}' --required 
@@json=
'{
"Catalog": "{{ Catalog }}", 
"Identifier": "{{ Identifier }}"
}'
;
```
</TabItem>
</Tabs>
