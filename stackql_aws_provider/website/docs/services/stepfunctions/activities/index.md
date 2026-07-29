--- 
title: activities
hide_title: false
hide_table_of_contents: false
keywords:
  - activities
  - stepfunctions
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

Creates, updates, deletes, gets or lists an <code>activities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="activities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.stepfunctions.activities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_activity"
    values={[
        { label: 'describe_activity', value: 'describe_activity' },
        { label: 'list_activities', value: 'list_activities' }
    ]}
>
<TabItem value="describe_activity">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the activity. A name must not contain: white space brackets &lt; &gt; &#123; &#125; &#91; &#93; wildcard characters ? * special characters " # % \ ^ | ~ ` $ & , ; : / control characters (U+0000-001F, U+007F-009F, U+FFFE-FFFF) surrogates (U+D800-DFFF) invalid characters ( U+10FFFF) To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.</td>
</tr>
<tr>
    <td><CopyableCode code="activity_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that identifies the activity.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the activity is created.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_configuration" /></td>
    <td><code>object</code></td>
    <td>Settings for configured server-side encryption.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_activities">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the activity. A name must not contain: white space brackets &lt; &gt; &#123; &#125; &#91; &#93; wildcard characters ? * special characters " # % \ ^ | ~ ` $ & , ; : / control characters (U+0000-001F, U+007F-009F, U+FFFE-FFFF) surrogates (U+D800-DFFF) invalid characters ( U+10FFFF) To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.</td>
</tr>
<tr>
    <td><CopyableCode code="activity_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that identifies the activity.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the activity is created.</td>
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
    <td><a href="#describe_activity"><CopyableCode code="describe_activity" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an activity. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</td>
</tr>
<tr>
    <td><a href="#list_activities"><CopyableCode code="list_activities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the existing activities. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</td>
</tr>
<tr>
    <td><a href="#create_activity"><CopyableCode code="create_activity" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates an activity. An activity is a task that you write in any programming language and host on any machine that has access to Step Functions. Activities must poll Step Functions using the GetActivityTask API action and respond using SendTask* API actions. This function lets Step Functions know the existence of your activity and returns an identifier for use in a state machine and when polling from the activity. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes. CreateActivity is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created. CreateActivity's idempotency check is based on the activity name. If a following request has different tags values, Step Functions will ignore these differences and treat it as an idempotent request of the previous. In this case, tags will not be updated, even if they are different.</td>
</tr>
<tr>
    <td><a href="#delete_activity"><CopyableCode code="delete_activity" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an activity.</td>
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
    defaultValue="describe_activity"
    values={[
        { label: 'describe_activity', value: 'describe_activity' },
        { label: 'list_activities', value: 'list_activities' }
    ]}
>
<TabItem value="describe_activity">

Describes an activity. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.

```sql
SELECT
name,
activity_arn,
creation_date,
encryption_configuration
FROM aws.stepfunctions.activities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_activities">

Lists the existing activities. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.

```sql
SELECT
name,
activity_arn,
creation_date
FROM aws.stepfunctions.activities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_activity"
    values={[
        { label: 'create_activity', value: 'create_activity' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_activity">

Creates an activity. An activity is a task that you write in any programming language and host on any machine that has access to Step Functions. Activities must poll Step Functions using the GetActivityTask API action and respond using SendTask* API actions. This function lets Step Functions know the existence of your activity and returns an identifier for use in a state machine and when polling from the activity. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes. CreateActivity is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created. CreateActivity's idempotency check is based on the activity name. If a following request has different tags values, Step Functions will ignore these differences and treat it as an idempotent request of the previous. In this case, tags will not be updated, even if they are different.

```sql
INSERT INTO aws.stepfunctions.activities (
name,
tags,
encryptionConfiguration,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ tags }}',
'{{ encryptionConfiguration }}',
'{{ region }}'
RETURNING
activity_arn,
creation_date
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: activities
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the activities resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the activity to create. This name must be unique for your Amazon Web Services account and region for 90 days. For more information, see Limits Related to State Machine Executions in the Step Functions Developer Guide. A name must not contain: white space brackets < > { } [ ] wildcard characters ? * special characters " # % \ ^ | ~ \` $ & , ; : / control characters (U+0000-001F, U+007F-009F, U+FFFE-FFFF) surrogates (U+D800-DFFF) invalid characters ( U+10FFFF) To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.
    - name: tags
      description: |
        The list of tags to add to a resource. An array of key-value pairs. For more information, see Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide, and Controlling Access Using IAM Tags. Tags may only contain Unicode letters, digits, white space, or these symbols: _ . : / = + - @.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: encryptionConfiguration
      description: |
        Settings to configure server-side encryption.
      value:
        kmsKeyId: "{{ kmsKeyId }}"
        kmsDataKeyReusePeriodSeconds: {{ kmsDataKeyReusePeriodSeconds }}
        type_: "{{ type_ }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_activity"
    values={[
        { label: 'delete_activity', value: 'delete_activity' }
    ]}
>
<TabItem value="delete_activity">

Deletes an activity.

```sql
DELETE FROM aws.stepfunctions.activities
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
