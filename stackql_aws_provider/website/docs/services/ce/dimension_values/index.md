--- 
title: dimension_values
hide_title: false
hide_table_of_contents: false
keywords:
  - dimension_values
  - ce
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

Creates, updates, deletes, gets or lists a <code>dimension_values</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dimension_values" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ce.dimension_values" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_dimension_values"
    values={[
        { label: 'get_dimension_values', value: 'get_dimension_values' }
    ]}
>
<TabItem value="get_dimension_values">

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
    <td><CopyableCode code="DimensionValues" /></td>
    <td><code>array</code></td>
    <td>The filters that you used to filter your request. Some dimensions are available only for a specific context. If you set the context to COST_AND_USAGE, you can use the following dimensions for searching: AZ - The Availability Zone. An example is us-east-1a. DATABASE_ENGINE - The Amazon Relational Database Service database. Examples are Aurora or MySQL. INSTANCE_TYPE - The type of Amazon EC2 instance. An example is m4.xlarge. LEGAL_ENTITY_NAME - The name of the organization that sells you Amazon Web Services services, such as Amazon Web Services. LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the Amazon Web Services ID of the member account. OPERATING_SYSTEM - The operating system. Examples are Windows or Linux. OPERATION - The action performed. Examples include RunInstance and CreateBucket. PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux. PURCHASE_TYPE - The reservation type of the purchase to which this usage is related. Examples include On-Demand Instances and Standard Reserved Instances. SERVICE - The Amazon Web Services service such as Amazon DynamoDB. USAGE_TYPE - The type of usage. An example is DataTransfer-In-Bytes. The response for the GetDimensionValues operation includes a unit attribute. Examples include GB and Hrs. USAGE_TYPE_GROUP - The grouping of common usage types. An example is Amazon EC2: CloudWatch – Alarms. The response for this operation includes a unit attribute. RECORD_TYPE - The different types of charges such as RI fees, usage costs, tax refunds, and credits. RESOURCE_ID - The unique identifier of the resource. ResourceId is an opt-in feature only available for last 14 days for EC2-Compute Service. You can opt-in by enabling Hourly and Resource Level Data in Cost Management Console preferences. If you set the context to RESERVATIONS, you can use the following dimensions for searching: AZ - The Availability Zone. An example is us-east-1a. CACHE_ENGINE - The Amazon ElastiCache operating system. Examples are Windows or Linux. DEPLOYMENT_OPTION - The scope of Amazon Relational Database Service deployments. Valid values are SingleAZ and MultiAZ. INSTANCE_TYPE - The type of Amazon EC2 instance. An example is m4.xlarge. LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the Amazon Web Services ID of the member account. PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux. REGION - The Amazon Web Services Region. SCOPE (Utilization only) - The scope of a Reserved Instance (RI). Values are regional or a single Availability Zone. TAG (Coverage only) - The tags that are associated with a Reserved Instance (RI). TENANCY - The tenancy of a resource. Examples are shared or dedicated. If you set the context to SAVINGS_PLANS, you can use the following dimensions for searching: SAVINGS_PLANS_TYPE - Type of Savings Plans (EC2 Instance or Compute) PAYMENT_OPTION - Payment option for the given Savings Plans (for example, All Upfront) REGION - The Amazon Web Services Region. INSTANCE_TYPE_FAMILY - The family of instances (For example, m5) LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the Amazon Web Services ID of the member account. SAVINGS_PLAN_ARN - The unique identifier for your Savings Plan</td>
</tr>
<tr>
    <td><CopyableCode code="NextPageToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of retrievable results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ReturnSize" /></td>
    <td><code>integer</code></td>
    <td>The number of results that Amazon Web Services returned at one time.</td>
</tr>
<tr>
    <td><CopyableCode code="TotalSize" /></td>
    <td><code>integer</code></td>
    <td>The total number of search results.</td>
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
    <td><a href="#get_dimension_values"><CopyableCode code="get_dimension_values" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string.</td>
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
    defaultValue="get_dimension_values"
    values={[
        { label: 'get_dimension_values', value: 'get_dimension_values' }
    ]}
>
<TabItem value="get_dimension_values">

Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string.

```sql
SELECT
DimensionValues,
NextPageToken,
ReturnSize,
TotalSize
FROM aws.ce.dimension_values
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
