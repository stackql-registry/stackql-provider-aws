--- 
title: benefit_allocations
hide_title: false
hide_table_of_contents: false
keywords:
  - benefit_allocations
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

Creates, updates, deletes, gets or lists a <code>benefit_allocations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="benefit_allocations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.partnercentral_benefits.benefit_allocations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_benefit_allocation"
    values={[
        { label: 'get_benefit_allocation', value: 'get_benefit_allocation' },
        { label: 'list_benefit_allocations', value: 'list_benefit_allocations' }
    ]}
>
<TabItem value="get_benefit_allocation">

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
    <td><CopyableCode code="ApplicableBenefitIds" /></td>
    <td><code>array</code></td>
    <td>A list of benefit identifiers that this allocation can be applied to.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the benefit allocation. (pattern: &lt;code&gt;(arn:.+benalloc-&#91;0-9a-z&#93;&#123;14&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="BenefitApplicationId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the benefit application that resulted in this allocation. (pattern: &lt;code&gt;benappl-&#91;0-9a-z&#93;&#123;14&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="BenefitId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the benefit that this allocation is based on. (pattern: &lt;code&gt;(arn:.+|ben-&#91;0-9a-z&#93;&#123;14&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Catalog" /></td>
    <td><code>string</code></td>
    <td>The catalog identifier that the benefit allocation belongs to. (pattern: &lt;code&gt;&#91;A-Za-z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the benefit allocation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A detailed description of the benefit allocation.</td>
</tr>
<tr>
    <td><CopyableCode code="ExpiresAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the benefit allocation expires and is no longer usable.</td>
</tr>
<tr>
    <td><CopyableCode code="FulfillmentDetail" /></td>
    <td><code>object</code></td>
    <td>Detailed information about how the benefit allocation is fulfilled.</td>
</tr>
<tr>
    <td><CopyableCode code="FulfillmentType" /></td>
    <td><code>string</code></td>
    <td>The fulfillment type used for this benefit allocation. (CREDITS, CASH, ACCESS)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the benefit allocation. (pattern: &lt;code&gt;benalloc-&#91;0-9a-z&#93;&#123;14&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the benefit allocation.</td>
</tr>
<tr>
    <td><CopyableCode code="StartsAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the benefit allocation becomes active and usable.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the benefit allocation (e.g., active, expired, consumed). (ACTIVE, INACTIVE, FULFILLED)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusReason" /></td>
    <td><code>string</code></td>
    <td>Additional information explaining the current status of the benefit allocation.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the benefit allocation was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_benefit_allocations">

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
    <td><CopyableCode code="ApplicableBenefitIds" /></td>
    <td><code>array</code></td>
    <td>The identifiers of the benefits applicable for this allocation.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the benefit allocation.</td>
</tr>
<tr>
    <td><CopyableCode code="BenefitApplicationId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the benefit application that resulted in this allocation. (pattern: &lt;code&gt;benappl-&#91;0-9a-z&#93;&#123;14&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="BenefitId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the benefit that this allocation is based on. (pattern: &lt;code&gt;(arn:.+|ben-&#91;0-9a-z&#93;&#123;14&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Catalog" /></td>
    <td><code>string</code></td>
    <td>The catalog identifier that the benefit allocation belongs to. (pattern: &lt;code&gt;&#91;A-Za-z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the benefit allocation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ExpiresAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the benefit allocation expires.</td>
</tr>
<tr>
    <td><CopyableCode code="FulfillmentTypes" /></td>
    <td><code>array</code></td>
    <td>The fulfillment types used for this benefit allocation.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the benefit allocation. (pattern: &lt;code&gt;benalloc-&#91;0-9a-z&#93;&#123;14&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the benefit allocation.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the benefit allocation. (ACTIVE, INACTIVE, FULFILLED)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusReason" /></td>
    <td><code>string</code></td>
    <td>Additional information explaining the current status of the benefit allocation.</td>
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
    <td><a href="#get_benefit_allocation"><CopyableCode code="get_benefit_allocation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific benefit allocation that has been granted to a partner.</td>
</tr>
<tr>
    <td><a href="#list_benefit_allocations"><CopyableCode code="list_benefit_allocations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a paginated list of benefit allocations based on specified filter criteria.</td>
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
    defaultValue="get_benefit_allocation"
    values={[
        { label: 'get_benefit_allocation', value: 'get_benefit_allocation' },
        { label: 'list_benefit_allocations', value: 'list_benefit_allocations' }
    ]}
>
<TabItem value="get_benefit_allocation">

Retrieves detailed information about a specific benefit allocation that has been granted to a partner.

```sql
SELECT
ApplicableBenefitIds,
Arn,
BenefitApplicationId,
BenefitId,
Catalog,
CreatedAt,
Description,
ExpiresAt,
FulfillmentDetail,
FulfillmentType,
Id,
Name,
StartsAt,
Status,
StatusReason,
UpdatedAt
FROM aws.partnercentral_benefits.benefit_allocations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_benefit_allocations">

Retrieves a paginated list of benefit allocations based on specified filter criteria.

```sql
SELECT
ApplicableBenefitIds,
Arn,
BenefitApplicationId,
BenefitId,
Catalog,
CreatedAt,
ExpiresAt,
FulfillmentTypes,
Id,
Name,
Status,
StatusReason
FROM aws.partnercentral_benefits.benefit_allocations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
