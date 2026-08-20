--- 
title: ml_input_channels
hide_title: false
hide_table_of_contents: false
keywords:
  - ml_input_channels
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

Creates, updates, deletes, gets or lists a <code>ml_input_channels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ml_input_channels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanroomsml.ml_input_channels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ml_input_channel"
    values={[
        { label: 'get_ml_input_channel', value: 'get_ml_input_channel' },
        { label: 'list_ml_input_channels', value: 'list_ml_input_channels' }
    ]}
>
<TabItem value="get_ml_input_channel">

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
    <td>The name of the ML input channel. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_identifier" /></td>
    <td><code>string</code></td>
    <td>The collaboration ID of the collaboration that contains the ML input channel. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configured_model_algorithm_associations" /></td>
    <td><code>array</code></td>
    <td>The configured model algorithm associations that were used to create the ML input channel.</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the ML input channel was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the ML input channel. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="input_channel" /></td>
    <td><code>object</code></td>
    <td>Provides information about the data source that is used to create an ML input channel.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key that was used to create the ML input channel. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:kms:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:key/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membership_identifier" /></td>
    <td><code>string</code></td>
    <td>The membership ID of the membership that contains the ML input channel. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ml_input_channel_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ML input channel. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:membership/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;/ml-input-channel/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_files" /></td>
    <td><code>number (double)</code></td>
    <td>The number of files in the ML input channel.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_records" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of records in the ML input channel.</td>
</tr>
<tr>
    <td><CopyableCode code="payer_configuration" /></td>
    <td><code>object</code></td>
    <td>Specifies which member accounts are responsible for paying for compute and synthetic data generation costs in a Clean Rooms ML collaboration.</td>
</tr>
<tr>
    <td><CopyableCode code="privacy_budgets" /></td>
    <td><code>object</code></td>
    <td>Returns the privacy budgets that control access to this Clean Rooms ML input channel. Use these budgets to monitor and limit resource consumption over specified time periods.</td>
</tr>
<tr>
    <td><CopyableCode code="protected_query_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the protected query that was used to create the ML input channel. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="retention_in_days" /></td>
    <td><code>integer</code></td>
    <td>The number of days to keep the data in the ML input channel.</td>
</tr>
<tr>
    <td><CopyableCode code="size_in_gb" /></td>
    <td><code>number (double)</code></td>
    <td>The size, in GB, of the ML input channel.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the ML input channel. (CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED, ACTIVE, DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="status_details" /></td>
    <td><code>object</code></td>
    <td>Details about the status of a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="synthetic_data_configuration" /></td>
    <td><code>object</code></td>
    <td>The synthetic data configuration for this ML input channel, including parameters for generating privacy-preserving synthetic data and evaluation scores for measuring the privacy of the generated data.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The optional metadata that you applied to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags: Maximum number of tags per resource - 50. For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length - 128 Unicode characters in UTF-8. Maximum value length - 256 Unicode characters in UTF-8. If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case sensitive. Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the ML input channel was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ml_input_channels">

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
    <td>The name of the ML input channel. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_identifier" /></td>
    <td><code>string</code></td>
    <td>The collaboration ID of the collaboration that contains the ML input channel. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configured_model_algorithm_associations" /></td>
    <td><code>array</code></td>
    <td>The associated configured model algorithms used to create the ML input channel.</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the ML input channel was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the ML input channel. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membership_identifier" /></td>
    <td><code>string</code></td>
    <td>The membership ID of the membership that contains the ML input channel. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ml_input_channel_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ML input channel. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:membership/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;/ml-input-channel/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="payer_configuration" /></td>
    <td><code>object</code></td>
    <td>Specifies which member accounts are responsible for paying for compute and synthetic data generation costs in a Clean Rooms ML collaboration.</td>
</tr>
<tr>
    <td><CopyableCode code="protected_query_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the protected query that was used to create the ML input channel. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the ML input channel. (CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED, ACTIVE, DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the ML input channel was updated.</td>
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
    <td><a href="#get_ml_input_channel"><CopyableCode code="get_ml_input_channel" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ml_input_channel_arn"><code>ml_input_channel_arn</code></a>, <a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about an ML input channel.</td>
</tr>
<tr>
    <td><a href="#list_ml_input_channels"><CopyableCode code="list_ml_input_channels" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of ML input channels.</td>
</tr>
<tr>
    <td><a href="#create_ml_input_channel"><CopyableCode code="create_ml_input_channel" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-configuredModelAlgorithmAssociations"><code>configuredModelAlgorithmAssociations</code></a>, <a href="#parameter-inputChannel"><code>inputChannel</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-retentionInDays"><code>retentionInDays</code></a></td>
    <td></td>
    <td>Provides the information to create an ML input channel. An ML input channel is the result of a query that can be used for ML modeling.</td>
</tr>
<tr>
    <td><a href="#delete_ml_input_channel_data"><CopyableCode code="delete_ml_input_channel_data" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ml_input_channel_arn"><code>ml_input_channel_arn</code></a>, <a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides the information necessary to delete an ML input channel.</td>
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
<tr id="parameter-membership_identifier">
    <td><CopyableCode code="membership_identifier" /></td>
    <td><code>string</code></td>
    <td>The membership ID of the membership that contains the ML input channel you want to delete.</td>
</tr>
<tr id="parameter-ml_input_channel_arn">
    <td><CopyableCode code="ml_input_channel_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ML input channel that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of ML input channels to return.</td>
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
    defaultValue="get_ml_input_channel"
    values={[
        { label: 'get_ml_input_channel', value: 'get_ml_input_channel' },
        { label: 'list_ml_input_channels', value: 'list_ml_input_channels' }
    ]}
>
<TabItem value="get_ml_input_channel">

Returns information about an ML input channel.

```sql
SELECT
name,
collaboration_identifier,
configured_model_algorithm_associations,
create_time,
description,
input_channel,
kms_key_arn,
membership_identifier,
ml_input_channel_arn,
number_of_files,
number_of_records,
payer_configuration,
privacy_budgets,
protected_query_identifier,
retention_in_days,
size_in_gb,
status,
status_details,
synthetic_data_configuration,
tags,
update_time
FROM aws.cleanroomsml.ml_input_channels
WHERE ml_input_channel_arn = '{{ ml_input_channel_arn }}' -- required
AND membership_identifier = '{{ membership_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_ml_input_channels">

Returns a list of ML input channels.

```sql
SELECT
name,
collaboration_identifier,
configured_model_algorithm_associations,
create_time,
description,
membership_identifier,
ml_input_channel_arn,
payer_configuration,
protected_query_identifier,
status,
update_time
FROM aws.cleanroomsml.ml_input_channels
WHERE membership_identifier = '{{ membership_identifier }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ml_input_channel"
    values={[
        { label: 'create_ml_input_channel', value: 'create_ml_input_channel' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ml_input_channel">

Provides the information to create an ML input channel. An ML input channel is the result of a query that can be used for ML modeling.

```sql
INSERT INTO aws.cleanroomsml.ml_input_channels (
configuredModelAlgorithmAssociations,
inputChannel,
name,
retentionInDays,
description,
kmsKeyArn,
tags,
payerConfiguration,
membership_identifier,
region
)
SELECT 
'{{ configuredModelAlgorithmAssociations }}' /* required */,
'{{ inputChannel }}' /* required */,
'{{ name }}' /* required */,
{{ retentionInDays }} /* required */,
'{{ description }}',
'{{ kmsKeyArn }}',
'{{ tags }}',
'{{ payerConfiguration }}',
'{{ membership_identifier }}',
'{{ region }}'
RETURNING
ml_input_channel_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ml_input_channels
  props:
    - name: membership_identifier
      value: "{{ membership_identifier }}"
      description: Required parameter for the ml_input_channels resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ml_input_channels resource.
    - name: configuredModelAlgorithmAssociations
      value:
        - "{{ configuredModelAlgorithmAssociations }}"
    - name: inputChannel
      description: |
        Provides information about the data source that is used to create an ML input channel.
      value:
        dataSource:
          protectedQueryInputParameters:
            sqlParameters:
              queryString: "{{ queryString }}"
              analysisTemplateArn: "{{ analysisTemplateArn }}"
              parameters: "{{ parameters }}"
            computeConfiguration:
              worker:
                type_: "{{ type_ }}"
                number: {{ number }}
                properties_: "{{ properties_ }}"
            resultFormat: "{{ resultFormat }}"
        roleArn: "{{ roleArn }}"
    - name: name
      value: "{{ name }}"
    - name: retentionInDays
      value: {{ retentionInDays }}
    - name: description
      value: "{{ description }}"
    - name: kmsKeyArn
      value: "{{ kmsKeyArn }}"
    - name: tags
      value: "{{ tags }}"
    - name: payerConfiguration
      description: |
        Specifies which member accounts are responsible for paying for compute and synthetic data generation costs in a Clean Rooms ML collaboration.
      value:
        computePayerAccountId: "{{ computePayerAccountId }}"
        syntheticDataPayerAccountId: "{{ syntheticDataPayerAccountId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ml_input_channel_data"
    values={[
        { label: 'delete_ml_input_channel_data', value: 'delete_ml_input_channel_data' }
    ]}
>
<TabItem value="delete_ml_input_channel_data">

Provides the information necessary to delete an ML input channel.

```sql
DELETE FROM aws.cleanroomsml.ml_input_channels
WHERE ml_input_channel_arn = '{{ ml_input_channel_arn }}' --required
AND membership_identifier = '{{ membership_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
