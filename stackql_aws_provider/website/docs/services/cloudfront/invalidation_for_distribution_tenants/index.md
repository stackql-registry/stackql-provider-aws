--- 
title: invalidation_for_distribution_tenants
hide_title: false
hide_table_of_contents: false
keywords:
  - invalidation_for_distribution_tenants
  - cloudfront
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

Creates, updates, deletes, gets or lists an <code>invalidation_for_distribution_tenants</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="invalidation_for_distribution_tenants" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.invalidation_for_distribution_tenants" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_invalidation_for_distribution_tenant"
    values={[
        { label: 'get_invalidation_for_distribution_tenant', value: 'get_invalidation_for_distribution_tenant' }
    ]}
>
<TabItem value="get_invalidation_for_distribution_tenant">

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
    <td><CopyableCode code="create_time" /></td>
    <td><code>string</code></td>
    <td>The date and time the invalidation request was first made.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the invalidation request. For example: IDFDVBD632BHDS5.</td>
</tr>
<tr>
    <td><CopyableCode code="invalidation_batch" /></td>
    <td><code>string</code></td>
    <td>The current invalidation information for the batch request.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the invalidation request. When the invalidation batch is finished, the status is Completed.</td>
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
    <td><a href="#get_invalidation_for_distribution_tenant"><CopyableCode code="get_invalidation_for_distribution_tenant" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-distribution_tenant_id"><code>distribution_tenant_id</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specific invalidation for a distribution tenant.</td>
</tr>
<tr>
    <td><a href="#create_invalidation_for_distribution_tenant"><CopyableCode code="create_invalidation_for_distribution_tenant" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InvalidationBatch"><code>InvalidationBatch</code></a></td>
    <td></td>
    <td>Creates an invalidation for a distribution tenant. For more information, see Invalidating files in the Amazon CloudFront Developer Guide.</td>
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
<tr id="parameter-distribution_tenant_id">
    <td><CopyableCode code="distribution_tenant_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the distribution tenant.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the distribution tenant.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_invalidation_for_distribution_tenant"
    values={[
        { label: 'get_invalidation_for_distribution_tenant', value: 'get_invalidation_for_distribution_tenant' }
    ]}
>
<TabItem value="get_invalidation_for_distribution_tenant">

Gets information about a specific invalidation for a distribution tenant.

```sql
SELECT
create_time,
id,
invalidation_batch,
status
FROM aws.cloudfront.invalidation_for_distribution_tenants
WHERE distribution_tenant_id = '{{ distribution_tenant_id }}' -- required
AND id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_invalidation_for_distribution_tenant"
    values={[
        { label: 'create_invalidation_for_distribution_tenant', value: 'create_invalidation_for_distribution_tenant' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_invalidation_for_distribution_tenant">

Creates an invalidation for a distribution tenant. For more information, see Invalidating files in the Amazon CloudFront Developer Guide.

```sql
INSERT INTO aws.cloudfront.invalidation_for_distribution_tenants (
InvalidationBatch,
id,
region
)
SELECT 
'{{ InvalidationBatch }}' /* required */,
'{{ id }}',
'{{ region }}'
RETURNING
invalidation,
location
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: invalidation_for_distribution_tenants
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the invalidation_for_distribution_tenants resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the invalidation_for_distribution_tenants resource.
    - name: InvalidationBatch
      description: |
        An invalidation batch.
      value:
        Paths:
          Quantity: {{ Quantity }}
          Items:
            - "{{ Items }}"
        CallerReference: "{{ CallerReference }}"
`}</CodeBlock>

</TabItem>
</Tabs>
