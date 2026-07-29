--- 
title: import_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - import_tasks
  - logs
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

Creates, updates, deletes, gets or lists an <code>import_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="import_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.import_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_import_tasks"
    values={[
        { label: 'describe_import_tasks', value: 'describe_import_tasks' }
    ]}
>
<TabItem value="describe_import_tasks">

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
    <td><CopyableCode code="imports" /></td>
    <td><code>array</code></td>
    <td>The list of import tasks that match the request filters.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. The token expires after 24 hours.</td>
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
    <td><a href="#describe_import_tasks"><CopyableCode code="describe_import_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists and describes import tasks, with optional filtering by import status and source ARN.</td>
</tr>
<tr>
    <td><a href="#create_import_task"><CopyableCode code="create_import_task" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-importSourceArn"><code>importSourceArn</code></a>, <a href="#parameter-importRoleArn"><code>importRoleArn</code></a></td>
    <td></td>
    <td>Starts an import from a data source to CloudWatch Log and creates a managed log group as the destination for the imported data. Currently, CloudTrail Event Data Store is the only supported data source. The import task must satisfy the following constraints: The specified source must be in an ACTIVE state. The API caller must have permissions to access the data in the provided source and to perform iam:PassRole on the provided import role which has the same permissions, as described below. The provided IAM role must trust the "cloudtrail.amazonaws.com" principal and have the following permissions: cloudtrail:GetEventDataStoreData logs:CreateLogGroup logs:CreateLogStream logs:PutResourcePolicy (If source has an associated Amazon Web Services KMS Key) kms:Decrypt (If source has an associated Amazon Web Services KMS Key) kms:GenerateDataKey Example IAM policy for provided import role: &#91; &#123; "Effect": "Allow", "Action": "iam:PassRole", "Resource": "arn:aws:iam::123456789012:role/apiCallerCredentials", "Condition": &#123; "StringLike": &#123; "iam:AssociatedResourceARN": "arn:aws:logs:us-east-1:123456789012:log-group:aws/cloudtrail/f1d45bff-d0e3-4868-b5d9-2eb678aa32fb:*" &#125; &#125; &#125;, &#123; "Effect": "Allow", "Action": &#91; "cloudtrail:GetEventDataStoreData" &#93;, "Resource": &#91; "arn:aws:cloudtrail:us-east-1:123456789012:eventdatastore/f1d45bff-d0e3-4868-b5d9-2eb678aa32fb" &#93; &#125;, &#123; "Effect": "Allow", "Action": &#91; "logs:CreateImportTask", "logs:CreateLogGroup", "logs:CreateLogStream", "logs:PutResourcePolicy" &#93;, "Resource": &#91; "arn:aws:logs:us-east-1:123456789012:log-group:/aws/cloudtrail/*" &#93; &#125;, &#123; "Effect": "Allow", "Action": &#91; "kms:Decrypt", "kms:GenerateDataKey" &#93;, "Resource": &#91; "arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012" &#93; &#125; &#93; If the import source has a customer managed key, the "cloudtrail.amazonaws.com" principal needs permissions to perform kms:Decrypt and kms:GenerateDataKey. There can be no more than 3 active imports per account at a given time. The startEventTime must be less than or equal to endEventTime. The data being imported must be within the specified source's retention period.</td>
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
    defaultValue="describe_import_tasks"
    values={[
        { label: 'describe_import_tasks', value: 'describe_import_tasks' }
    ]}
>
<TabItem value="describe_import_tasks">

Lists and describes import tasks, with optional filtering by import status and source ARN.

```sql
SELECT
imports,
next_token
FROM aws.logs.import_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_import_task"
    values={[
        { label: 'create_import_task', value: 'create_import_task' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_import_task">

Starts an import from a data source to CloudWatch Log and creates a managed log group as the destination for the imported data. Currently, CloudTrail Event Data Store is the only supported data source. The import task must satisfy the following constraints: The specified source must be in an ACTIVE state. The API caller must have permissions to access the data in the provided source and to perform iam:PassRole on the provided import role which has the same permissions, as described below. The provided IAM role must trust the "cloudtrail.amazonaws.com" principal and have the following permissions: cloudtrail:GetEventDataStoreData logs:CreateLogGroup logs:CreateLogStream logs:PutResourcePolicy (If source has an associated Amazon Web Services KMS Key) kms:Decrypt (If source has an associated Amazon Web Services KMS Key) kms:GenerateDataKey Example IAM policy for provided import role: [ &#123; "Effect": "Allow", "Action": "iam:PassRole", "Resource": "arn:aws:iam::123456789012:role/apiCallerCredentials", "Condition": &#123; "StringLike": &#123; "iam:AssociatedResourceARN": "arn:aws:logs:us-east-1:123456789012:log-group:aws/cloudtrail/f1d45bff-d0e3-4868-b5d9-2eb678aa32fb:*" &#125; &#125; &#125;, &#123; "Effect": "Allow", "Action": [ "cloudtrail:GetEventDataStoreData" ], "Resource": [ "arn:aws:cloudtrail:us-east-1:123456789012:eventdatastore/f1d45bff-d0e3-4868-b5d9-2eb678aa32fb" ] &#125;, &#123; "Effect": "Allow", "Action": [ "logs:CreateImportTask", "logs:CreateLogGroup", "logs:CreateLogStream", "logs:PutResourcePolicy" ], "Resource": [ "arn:aws:logs:us-east-1:123456789012:log-group:/aws/cloudtrail/*" ] &#125;, &#123; "Effect": "Allow", "Action": [ "kms:Decrypt", "kms:GenerateDataKey" ], "Resource": [ "arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012" ] &#125; ] If the import source has a customer managed key, the "cloudtrail.amazonaws.com" principal needs permissions to perform kms:Decrypt and kms:GenerateDataKey. There can be no more than 3 active imports per account at a given time. The startEventTime must be less than or equal to endEventTime. The data being imported must be within the specified source's retention period.

```sql
INSERT INTO aws.logs.import_tasks (
importSourceArn,
importRoleArn,
importFilter,
region
)
SELECT 
'{{ importSourceArn }}' /* required */,
'{{ importRoleArn }}' /* required */,
'{{ importFilter }}',
'{{ region }}'
RETURNING
creation_time,
import_destination_arn,
import_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: import_tasks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the import_tasks resource.
    - name: importSourceArn
      value: "{{ importSourceArn }}"
      description: |
        The ARN of the source to import from.
    - name: importRoleArn
      value: "{{ importRoleArn }}"
      description: |
        The ARN of the IAM role that grants CloudWatch Logs permission to import from the CloudTrail Lake Event Data Store.
    - name: importFilter
      description: |
        Optional filters to constrain the import by CloudTrail event time. Times are specified in Unix timestamp milliseconds. The range of data being imported must be within the specified source's retention period.
      value:
        startEventTime: {{ startEventTime }}
        endEventTime: {{ endEventTime }}
`}</CodeBlock>

</TabItem>
</Tabs>
