--- 
title: data_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - data_sets
  - marketplacecommerceanalytics
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

Creates, updates, deletes, gets or lists a <code>data_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.marketplacecommerceanalytics.data_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#generate_data_set"><CopyableCode code="generate_data_set" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-dataSetType"><code>dataSetType</code></a>, <a href="#parameter-dataSetPublicationDate"><code>dataSetPublicationDate</code></a>, <a href="#parameter-roleNameArn"><code>roleNameArn</code></a>, <a href="#parameter-destinationS3BucketName"><code>destinationS3BucketName</code></a>, <a href="#parameter-snsTopicArn"><code>snsTopicArn</code></a></td>
    <td></td>
    <td>Given a data set type and data set publication date, asynchronously publishes the requested data set to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name &#123;data_set_type&#125;_YYYY-MM-DD.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="generate_data_set"
    values={[
        { label: 'generate_data_set', value: 'generate_data_set' }
    ]}
>
<TabItem value="generate_data_set">

Given a data set type and data set publication date, asynchronously publishes the requested data set to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name &#123;data_set_type&#125;_YYYY-MM-DD.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.

```sql
EXEC aws.marketplacecommerceanalytics.data_sets.generate_data_set 
@region='{{ region }}' --required 
@@json=
'{
"dataSetType": "{{ dataSetType }}", 
"dataSetPublicationDate": "{{ dataSetPublicationDate }}", 
"roleNameArn": "{{ roleNameArn }}", 
"destinationS3BucketName": "{{ destinationS3BucketName }}", 
"destinationS3Prefix": "{{ destinationS3Prefix }}", 
"snsTopicArn": "{{ snsTopicArn }}", 
"customerDefinedValues": "{{ customerDefinedValues }}"
}'
;
```
</TabItem>
</Tabs>
