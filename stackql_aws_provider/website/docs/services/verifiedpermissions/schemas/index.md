--- 
title: schemas
hide_title: false
hide_table_of_contents: false
keywords:
  - schemas
  - verifiedpermissions
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

Creates, updates, deletes, gets or lists a <code>schemas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="schemas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.verifiedpermissions.schemas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_schema"
    values={[
        { label: 'get_schema', value: 'get_schema' }
    ]}
>
<TabItem value="get_schema">

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
    <td><CopyableCode code="createdDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the schema was originally created.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the schema was most recently updated.</td>
</tr>
<tr>
    <td><CopyableCode code="namespaces" /></td>
    <td><code>array</code></td>
    <td>The namespaces of the entities referenced by this schema.</td>
</tr>
<tr>
    <td><CopyableCode code="policyStoreId" /></td>
    <td><code>string</code></td>
    <td>The ID of the policy store that contains the schema. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-/_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>string</code></td>
    <td>The body of the schema, written in Cedar schema JSON.</td>
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
    <td><a href="#get_schema"><CopyableCode code="get_schema" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve the details for the specified schema in the specified policy store.</td>
</tr>
<tr>
    <td><a href="#put_schema"><CopyableCode code="put_schema" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policyStoreId"><code>policyStoreId</code></a>, <a href="#parameter-definition"><code>definition</code></a></td>
    <td></td>
    <td>Creates or updates the policy schema in the specified policy store. The schema is used to validate any Cedar policies and policy templates submitted to the policy store. Any changes to the schema validate only policies and templates submitted after the schema change. Existing policies and templates are not re-evaluated against the changed schema. If you later update a policy, then it is evaluated against the new schema at that time. Verified Permissions is eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.</td>
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
    defaultValue="get_schema"
    values={[
        { label: 'get_schema', value: 'get_schema' }
    ]}
>
<TabItem value="get_schema">

Retrieve the details for the specified schema in the specified policy store.

```sql
SELECT
createdDate,
lastUpdatedDate,
namespaces,
policyStoreId,
schema
FROM aws.verifiedpermissions.schemas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_schema"
    values={[
        { label: 'put_schema', value: 'put_schema' }
    ]}
>
<TabItem value="put_schema">

Creates or updates the policy schema in the specified policy store. The schema is used to validate any Cedar policies and policy templates submitted to the policy store. Any changes to the schema validate only policies and templates submitted after the schema change. Existing policies and templates are not re-evaluated against the changed schema. If you later update a policy, then it is evaluated against the new schema at that time. Verified Permissions is eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.

```sql
REPLACE aws.verifiedpermissions.schemas
SET 
policyStoreId = '{{ policyStoreId }}',
definition = '{{ definition }}'
WHERE 
region = '{{ region }}' --required
AND policyStoreId = '{{ policyStoreId }}' --required
AND definition = '{{ definition }}' --required
RETURNING
createdDate,
lastUpdatedDate,
namespaces,
policyStoreId;
```
</TabItem>
</Tabs>
