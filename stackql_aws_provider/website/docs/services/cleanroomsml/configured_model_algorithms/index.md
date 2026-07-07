--- 
title: configured_model_algorithms
hide_title: false
hide_table_of_contents: false
keywords:
  - configured_model_algorithms
  - cleanroomsml
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

Creates, updates, deletes, gets or lists a <code>configured_model_algorithms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configured_model_algorithms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanroomsml.configured_model_algorithms" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_configured_model_algorithm"
    values={[
        { label: 'get_configured_model_algorithm', value: 'get_configured_model_algorithm' },
        { label: 'list_configured_model_algorithms', value: 'list_configured_model_algorithms' }
    ]}
>
<TabItem value="get_configured_model_algorithm">

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
    <td>The name of the configured model algorithm. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuredModelAlgorithmArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured model algorithm. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:configured-model-algorithm/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the configured model algorithm was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the configured model algorithm. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="inferenceContainerConfig" /></td>
    <td><code>object</code></td>
    <td>Provides configuration information for the inference container.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key. This key is used to encrypt and decrypt customer-owned data in the configured ML model and associated data. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:kms:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:key/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service role that was used to create the configured model algorithm. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The optional metadata that you applied to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags: Maximum number of tags per resource - 50. For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length - 128 Unicode characters in UTF-8. Maximum value length - 256 Unicode characters in UTF-8. If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case sensitive. Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.</td>
</tr>
<tr>
    <td><CopyableCode code="trainingContainerConfig" /></td>
    <td><code>object</code></td>
    <td>Provides configuration information for the dockerized container where the model algorithm is stored.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the configured model algorithm was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_configured_model_algorithms">

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
    <td>The name of the configured model algorithm. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuredModelAlgorithmArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured model algorithm. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:configured-model-algorithm/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the configured model algorithm was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the configured model algorithm. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the configured model algorithm was updated.</td>
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
    <td><a href="#get_configured_model_algorithm"><CopyableCode code="get_configured_model_algorithm" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-configured_model_algorithm_arn"><code>configured_model_algorithm_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a configured model algorithm.</td>
</tr>
<tr>
    <td><a href="#list_configured_model_algorithms"><CopyableCode code="list_configured_model_algorithms" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of configured model algorithms.</td>
</tr>
<tr>
    <td><a href="#create_configured_model_algorithm"><CopyableCode code="create_configured_model_algorithm" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a></td>
    <td></td>
    <td>Creates a configured model algorithm using a container image stored in an ECR repository.</td>
</tr>
<tr>
    <td><a href="#delete_configured_model_algorithm"><CopyableCode code="delete_configured_model_algorithm" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-configured_model_algorithm_arn"><code>configured_model_algorithm_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a configured model algorithm.</td>
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
<tr id="parameter-configured_model_algorithm_arn">
    <td><CopyableCode code="configured_model_algorithm_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured model algorithm that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum size of the results that is returned per call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token value retrieved from a previous call to access the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_configured_model_algorithm"
    values={[
        { label: 'get_configured_model_algorithm', value: 'get_configured_model_algorithm' },
        { label: 'list_configured_model_algorithms', value: 'list_configured_model_algorithms' }
    ]}
>
<TabItem value="get_configured_model_algorithm">

Returns information about a configured model algorithm.

```sql
SELECT
name,
configuredModelAlgorithmArn,
createTime,
description,
inferenceContainerConfig,
kmsKeyArn,
roleArn,
tags,
trainingContainerConfig,
updateTime
FROM aws.cleanroomsml.configured_model_algorithms
WHERE configured_model_algorithm_arn = '{{ configured_model_algorithm_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_configured_model_algorithms">

Returns a list of configured model algorithms.

```sql
SELECT
name,
configuredModelAlgorithmArn,
createTime,
description,
updateTime
FROM aws.cleanroomsml.configured_model_algorithms
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_configured_model_algorithm"
    values={[
        { label: 'create_configured_model_algorithm', value: 'create_configured_model_algorithm' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_configured_model_algorithm">

Creates a configured model algorithm using a container image stored in an ECR repository.

```sql
INSERT INTO aws.cleanroomsml.configured_model_algorithms (
name,
description,
roleArn,
trainingContainerConfig,
inferenceContainerConfig,
tags,
kmsKeyArn,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ roleArn }}' /* required */,
'{{ trainingContainerConfig }}',
'{{ inferenceContainerConfig }}',
'{{ tags }}',
'{{ kmsKeyArn }}',
'{{ region }}'
RETURNING
configuredModelAlgorithmArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: configured_model_algorithms
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the configured_model_algorithms resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: trainingContainerConfig
      description: |
        Provides configuration information for the dockerized container where the model algorithm is stored.
      value:
        imageUri: "{{ imageUri }}"
        entrypoint:
          - "{{ entrypoint }}"
        arguments:
          - "{{ arguments }}"
        metricDefinitions:
          - name: "{{ name }}"
            regex: "{{ regex }}"
    - name: inferenceContainerConfig
      description: |
        Provides configuration information for the inference container.
      value:
        imageUri: "{{ imageUri }}"
    - name: tags
      value: "{{ tags }}"
    - name: kmsKeyArn
      value: "{{ kmsKeyArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_configured_model_algorithm"
    values={[
        { label: 'delete_configured_model_algorithm', value: 'delete_configured_model_algorithm' }
    ]}
>
<TabItem value="delete_configured_model_algorithm">

Deletes a configured model algorithm.

```sql
DELETE FROM aws.cleanroomsml.configured_model_algorithms
WHERE configured_model_algorithm_arn = '{{ configured_model_algorithm_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
