--- 
title: customer_agreements
hide_title: false
hide_table_of_contents: false
keywords:
  - customer_agreements
  - artifact
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

Creates, updates, deletes, gets or lists a <code>customer_agreements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="customer_agreements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.artifact.customer_agreements" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_customer_agreements"
    values={[
        { label: 'list_customer_agreements', value: 'list_customer_agreements' }
    ]}
>
<TabItem value="list_customer_agreements">

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
    <td>Identifier of the customer-agreement resource. (pattern: &lt;code&gt;customer-agreement-&#91;a-zA-Z0-9&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the customer-agreement resource. (pattern: &lt;code&gt;&#91;^&lt;&gt;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="acceptanceTerms" /></td>
    <td><code>array</code></td>
    <td>Terms required to accept the agreement resource.</td>
</tr>
<tr>
    <td><CopyableCode code="agreementArn" /></td>
    <td><code>string</code></td>
    <td>ARN of the agreement resource the customer-agreement resource represents. (pattern: &lt;code&gt;&#91;^&lt;&gt;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the customer-agreement resource. (pattern: &lt;code&gt;&#91;^&lt;&gt;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="awsAccountId" /></td>
    <td><code>string</code></td>
    <td>AWS account Id that owns the resource. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_\-\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the resource. (pattern: &lt;code&gt;&#91;^&lt;&gt;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="effectiveEnd" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp indicating when the agreement was terminated.</td>
</tr>
<tr>
    <td><CopyableCode code="effectiveStart" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp indicating when the agreement became effective.</td>
</tr>
<tr>
    <td><CopyableCode code="organizationArn" /></td>
    <td><code>string</code></td>
    <td>ARN of the organization that owns the resource. (pattern: &lt;code&gt;&#91;^&lt;&gt;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the resource. (ACTIVE, CUSTOMER_TERMINATED, AWS_TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="terminateTerms" /></td>
    <td><code>array</code></td>
    <td>Terms required to terminate the customer-agreement resource.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>Type of the customer-agreement resource. (CUSTOM, DEFAULT, MODIFIED)</td>
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
    <td><a href="#list_customer_agreements"><CopyableCode code="list_customer_agreements" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>List active customer-agreements applicable to calling identity.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of resources to return in the paginated response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Pagination token to request the next page of resources.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_customer_agreements"
    values={[
        { label: 'list_customer_agreements', value: 'list_customer_agreements' }
    ]}
>
<TabItem value="list_customer_agreements">

List active customer-agreements applicable to calling identity.

```sql
SELECT
id,
name,
acceptanceTerms,
agreementArn,
arn,
awsAccountId,
description,
effectiveEnd,
effectiveStart,
organizationArn,
state,
terminateTerms,
type_
FROM aws.artifact.customer_agreements
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
