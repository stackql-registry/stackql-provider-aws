--- 
title: s3_table_integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - s3_table_integrations
  - observabilityadmin
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

Creates, updates, deletes, gets or lists a <code>s3_table_integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="s3_table_integrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.observabilityadmin.s3_table_integrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_s3_table_integration"
    values={[
        { label: 'get_s3_table_integration', value: 'get_s3_table_integration' }
    ]}
>
<TabItem value="get_s3_table_integration">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the S3 Table integration. (pattern: &lt;code&gt;arn:aws(&#91;a-z0-9\-&#93;+)?:(&#91;a-zA-Z0-9\-&#93;+):(&#91;a-z0-9\-&#93;+)?:(&#91;0-9&#93;&#123;12&#125;)?:(.+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTimeStamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp when the S3 Table integration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationTableBucketArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the S3 bucket used as the destination for the table data. (pattern: &lt;code&gt;arn:aws(&#91;a-z0-9\-&#93;+)?:(&#91;a-zA-Z0-9\-&#93;+):(&#91;a-z0-9\-&#93;+)?:(&#91;0-9&#93;&#123;12&#125;)?:(.+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Encryption" /></td>
    <td><code>object</code></td>
    <td>Defines the encryption configuration for S3 Table integrations, including the encryption algorithm and KMS key settings.</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role used by the S3 Table integration. (pattern: &lt;code&gt;arn:aws(&#91;a-z0-9\-&#93;+)?:(&#91;a-zA-Z0-9\-&#93;+):(&#91;a-z0-9\-&#93;+)?:(&#91;0-9&#93;&#123;12&#125;)?:(.+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the S3 Table integration. (ACTIVE, DELETING)</td>
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
    <td><a href="#get_s3_table_integration"><CopyableCode code="get_s3_table_integration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a specific S3 Table integration, including its configuration, status, and metadata.</td>
</tr>
<tr>
    <td><a href="#create_s3_table_integration"><CopyableCode code="create_s3_table_integration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Creates an integration between CloudWatch and S3 Tables for analytics. This integration enables querying CloudWatch telemetry data using analytics engines like Amazon Athena, Amazon Redshift, and Apache Spark.</td>
</tr>
<tr>
    <td><a href="#delete_s3_table_integration"><CopyableCode code="delete_s3_table_integration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an S3 Table integration and its associated data. This operation removes the connection between CloudWatch Observability Admin and S3 Tables.</td>
</tr>
<tr>
    <td><a href="#list_s3_table_integrations"><CopyableCode code="list_s3_table_integrations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all S3 Table integrations in your account. We recommend using pagination to ensure that the operation returns quickly and successfully.</td>
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
    defaultValue="get_s3_table_integration"
    values={[
        { label: 'get_s3_table_integration', value: 'get_s3_table_integration' }
    ]}
>
<TabItem value="get_s3_table_integration">

Retrieves information about a specific S3 Table integration, including its configuration, status, and metadata.

```sql
SELECT
Arn,
CreatedTimeStamp,
DestinationTableBucketArn,
Encryption,
RoleArn,
Status
FROM aws.observabilityadmin.s3_table_integrations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_s3_table_integration"
    values={[
        { label: 'create_s3_table_integration', value: 'create_s3_table_integration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_s3_table_integration">

Creates an integration between CloudWatch and S3 Tables for analytics. This integration enables querying CloudWatch telemetry data using analytics engines like Amazon Athena, Amazon Redshift, and Apache Spark.

```sql
INSERT INTO aws.observabilityadmin.s3_table_integrations (
Encryption,
RoleArn,
Tags,
region
)
SELECT 
'{{ Encryption }}',
'{{ RoleArn }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
Arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: s3_table_integrations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the s3_table_integrations resource.
    - name: Encryption
      description: |
        Defines the encryption configuration for S3 Table integrations, including the encryption algorithm and KMS key settings.
      value:
        SseAlgorithm: "{{ SseAlgorithm }}"
        KmsKeyArn: "{{ KmsKeyArn }}"
    - name: RoleArn
      value: "{{ RoleArn }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_s3_table_integration"
    values={[
        { label: 'delete_s3_table_integration', value: 'delete_s3_table_integration' }
    ]}
>
<TabItem value="delete_s3_table_integration">

Deletes an S3 Table integration and its associated data. This operation removes the connection between CloudWatch Observability Admin and S3 Tables.

```sql
DELETE FROM aws.observabilityadmin.s3_table_integrations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_s3_table_integrations"
    values={[
        { label: 'list_s3_table_integrations', value: 'list_s3_table_integrations' }
    ]}
>
<TabItem value="list_s3_table_integrations">

Lists all S3 Table integrations in your account. We recommend using pagination to ensure that the operation returns quickly and successfully.

```sql
EXEC aws.observabilityadmin.s3_table_integrations.list_s3_table_integrations 
@region='{{ region }}' --required 
@@json=
'{
"MaxResults": {{ MaxResults }}, 
"NextToken": "{{ NextToken }}"
}'
;
```
</TabItem>
</Tabs>
