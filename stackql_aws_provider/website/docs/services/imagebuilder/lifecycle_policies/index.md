--- 
title: lifecycle_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - lifecycle_policies
  - imagebuilder
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

Creates, updates, deletes, gets or lists a <code>lifecycle_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lifecycle_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.imagebuilder.lifecycle_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_lifecycle_policy"
    values={[
        { label: 'get_lifecycle_policy', value: 'get_lifecycle_policy' },
        { label: 'list_lifecycle_policies', value: 'list_lifecycle_policies' }
    ]}
>
<TabItem value="get_lifecycle_policy">

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
    <td>The name of the lifecycle policy. (pattern: &lt;code&gt;^&#91;-_A-Za-z-0-9&#93;&#91;-_A-Za-z0-9 &#93;&#123;1,126&#125;&#91;-_A-Za-z-0-9&#93;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the lifecycle policy resource. (pattern: &lt;code&gt;^arn:aws(?:-&#91;a-z&#93;+)*:imagebuilder:&#91;a-z&#93;&#123;2,&#125;(?:-&#91;a-z&#93;+)+-&#91;0-9&#93;+:(?:&#91;0-9&#93;&#123;12&#125;|aws):lifecycle-policy/&#91;a-z0-9-_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dateCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when Image Builder created the lifecycle policy resource.</td>
</tr>
<tr>
    <td><CopyableCode code="dateLastRun" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for the last time Image Builder ran the lifecycle policy.</td>
</tr>
<tr>
    <td><CopyableCode code="dateUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when Image Builder updated the lifecycle policy resource.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional description for the lifecycle policy.</td>
</tr>
<tr>
    <td><CopyableCode code="executionRole" /></td>
    <td><code>string</code></td>
    <td>The name or Amazon Resource Name (ARN) of the IAM role that Image Builder uses to run the lifecycle policy. This is a custom role that you create. (pattern: &lt;code&gt;^(?:arn:aws(?:-&#91;a-z&#93;+)*:iam::&#91;0-9&#93;&#123;12&#125;:role/)?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policyDetails" /></td>
    <td><code>array</code></td>
    <td>The configuration details for a lifecycle policy resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceSelection" /></td>
    <td><code>object</code></td>
    <td>Resource selection criteria for the lifecycle policy.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The type of resources the lifecycle policy targets. (AMI_IMAGE, CONTAINER_IMAGE)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the lifecycle policy resource is enabled. (DISABLED, ENABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>To help manage your lifecycle policy resources, you can assign your own metadata to each resource in the form of tags. Each tag consists of a key and an optional value, both of which you define.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_lifecycle_policies">

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
    <td>The name of the lifecycle policy. (pattern: &lt;code&gt;^&#91;-_A-Za-z-0-9&#93;&#91;-_A-Za-z0-9 &#93;&#123;1,126&#125;&#91;-_A-Za-z-0-9&#93;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the lifecycle policy summary resource. (pattern: &lt;code&gt;^arn:aws(?:-&#91;a-z&#93;+)*:imagebuilder:&#91;a-z&#93;&#123;2,&#125;(?:-&#91;a-z&#93;+)+-&#91;0-9&#93;+:(?:&#91;0-9&#93;&#123;12&#125;|aws):lifecycle-policy/&#91;a-z0-9-_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dateCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when Image Builder created the lifecycle policy resource.</td>
</tr>
<tr>
    <td><CopyableCode code="dateLastRun" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for the last time Image Builder ran the lifecycle policy.</td>
</tr>
<tr>
    <td><CopyableCode code="dateUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when Image Builder updated the lifecycle policy resource.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional description for the lifecycle policy.</td>
</tr>
<tr>
    <td><CopyableCode code="executionRole" /></td>
    <td><code>string</code></td>
    <td>The name or Amazon Resource Name (ARN) of the IAM role that Image Builder uses to run the lifecycle policy. (pattern: &lt;code&gt;^(?:arn:aws(?:-&#91;a-z&#93;+)*:iam::&#91;0-9&#93;&#123;12&#125;:role/)?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The type of resources the lifecycle policy targets. (AMI_IMAGE, CONTAINER_IMAGE)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The lifecycle policy resource status. (DISABLED, ENABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>To help manage your lifecycle policy resources, you can assign your own metadata to each resource in the form of tags. Each tag consists of a key and an optional value, both of which you define.</td>
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
    <td><a href="#get_lifecycle_policy"><CopyableCode code="get_lifecycle_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-lifecyclePolicyArn"><code>lifecyclePolicyArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get details for the specified image lifecycle policy.</td>
</tr>
<tr>
    <td><a href="#list_lifecycle_policies"><CopyableCode code="list_lifecycle_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a list of lifecycle policies in your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_lifecycle_policy"><CopyableCode code="create_lifecycle_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-executionRole"><code>executionRole</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-policyDetails"><code>policyDetails</code></a>, <a href="#parameter-resourceSelection"><code>resourceSelection</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Create a lifecycle policy resource.</td>
</tr>
<tr>
    <td><a href="#update_lifecycle_policy"><CopyableCode code="update_lifecycle_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-lifecyclePolicyArn"><code>lifecyclePolicyArn</code></a>, <a href="#parameter-executionRole"><code>executionRole</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-policyDetails"><code>policyDetails</code></a>, <a href="#parameter-resourceSelection"><code>resourceSelection</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Update the specified lifecycle policy.</td>
</tr>
<tr>
    <td><a href="#delete_lifecycle_policy"><CopyableCode code="delete_lifecycle_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-lifecyclePolicyArn"><code>lifecyclePolicyArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete the specified lifecycle policy resource.</td>
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
<tr id="parameter-lifecyclePolicyArn">
    <td><CopyableCode code="lifecyclePolicyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the lifecycle policy resource to delete.</td>
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
    defaultValue="get_lifecycle_policy"
    values={[
        { label: 'get_lifecycle_policy', value: 'get_lifecycle_policy' },
        { label: 'list_lifecycle_policies', value: 'list_lifecycle_policies' }
    ]}
>
<TabItem value="get_lifecycle_policy">

Get details for the specified image lifecycle policy.

```sql
SELECT
name,
arn,
dateCreated,
dateLastRun,
dateUpdated,
description,
executionRole,
policyDetails,
resourceSelection,
resourceType,
status,
tags
FROM aws.imagebuilder.lifecycle_policies
WHERE lifecyclePolicyArn = '{{ lifecyclePolicyArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_lifecycle_policies">

Get a list of lifecycle policies in your Amazon Web Services account.

```sql
SELECT
name,
arn,
dateCreated,
dateLastRun,
dateUpdated,
description,
executionRole,
resourceType,
status,
tags
FROM aws.imagebuilder.lifecycle_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_lifecycle_policy"
    values={[
        { label: 'create_lifecycle_policy', value: 'create_lifecycle_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_lifecycle_policy">

Create a lifecycle policy resource.

```sql
INSERT INTO aws.imagebuilder.lifecycle_policies (
name,
description,
status,
executionRole,
resourceType,
policyDetails,
resourceSelection,
tags,
clientToken,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ status }}',
'{{ executionRole }}' /* required */,
'{{ resourceType }}' /* required */,
'{{ policyDetails }}' /* required */,
'{{ resourceSelection }}' /* required */,
'{{ tags }}',
'{{ clientToken }}' /* required */,
'{{ region }}'
RETURNING
clientToken,
lifecyclePolicyArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: lifecycle_policies
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the lifecycle_policies resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: status
      value: "{{ status }}"
      valid_values: ['DISABLED', 'ENABLED']
    - name: executionRole
      value: "{{ executionRole }}"
    - name: resourceType
      value: "{{ resourceType }}"
      valid_values: ['AMI_IMAGE', 'CONTAINER_IMAGE']
    - name: policyDetails
      value:
        - action:
            type_: "{{ type_ }}"
            includeResources:
              amis: {{ amis }}
              snapshots: {{ snapshots }}
              containers: {{ containers }}
          filter:
            type_: "{{ type_ }}"
            value: {{ value }}
            unit: "{{ unit }}"
            retainAtLeast: {{ retainAtLeast }}
          exclusionRules:
            tagMap: "{{ tagMap }}"
            amis:
              isPublic: {{ isPublic }}
              regions:
                - "{{ regions }}"
              sharedAccounts:
                - "{{ sharedAccounts }}"
              lastLaunched:
                value: {{ value }}
                unit: "{{ unit }}"
              tagMap: "{{ tagMap }}"
    - name: resourceSelection
      description: |
        Resource selection criteria for the lifecycle policy.
      value:
        recipes:
          - name: "{{ name }}"
            semanticVersion: "{{ semanticVersion }}"
        tagMap: "{{ tagMap }}"
    - name: tags
      value: "{{ tags }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_lifecycle_policy"
    values={[
        { label: 'update_lifecycle_policy', value: 'update_lifecycle_policy' }
    ]}
>
<TabItem value="update_lifecycle_policy">

Update the specified lifecycle policy.

```sql
UPDATE aws.imagebuilder.lifecycle_policies
SET 
lifecyclePolicyArn = '{{ lifecyclePolicyArn }}',
description = '{{ description }}',
status = '{{ status }}',
executionRole = '{{ executionRole }}',
resourceType = '{{ resourceType }}',
policyDetails = '{{ policyDetails }}',
resourceSelection = '{{ resourceSelection }}',
clientToken = '{{ clientToken }}'
WHERE 
region = '{{ region }}' --required
AND lifecyclePolicyArn = '{{ lifecyclePolicyArn }}' --required
AND executionRole = '{{ executionRole }}' --required
AND resourceType = '{{ resourceType }}' --required
AND policyDetails = '{{ policyDetails }}' --required
AND resourceSelection = '{{ resourceSelection }}' --required
AND clientToken = '{{ clientToken }}' --required
RETURNING
lifecyclePolicyArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_lifecycle_policy"
    values={[
        { label: 'delete_lifecycle_policy', value: 'delete_lifecycle_policy' }
    ]}
>
<TabItem value="delete_lifecycle_policy">

Delete the specified lifecycle policy resource.

```sql
DELETE FROM aws.imagebuilder.lifecycle_policies
WHERE lifecyclePolicyArn = '{{ lifecyclePolicyArn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
