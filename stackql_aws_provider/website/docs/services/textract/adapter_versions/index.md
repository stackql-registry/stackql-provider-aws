--- 
title: adapter_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - adapter_versions
  - textract
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

Creates, updates, deletes, gets or lists an <code>adapter_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="adapter_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.textract.adapter_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_adapter_version"
    values={[
        { label: 'get_adapter_version', value: 'get_adapter_version' },
        { label: 'list_adapter_versions', value: 'list_adapter_versions' }
    ]}
>
<TabItem value="get_adapter_version">

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
    <td><CopyableCode code="adapter_id" /></td>
    <td><code>string</code></td>
    <td>A string containing a unique ID for the adapter version being retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="adapter_version" /></td>
    <td><code>string</code></td>
    <td>A string containing the adapter version that has been retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the adapter version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_config" /></td>
    <td><code>object</code></td>
    <td>Specifies a dataset used to train a new adapter version. Takes a ManifestS3Objec as the value.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_metrics" /></td>
    <td><code>array</code></td>
    <td>The evaluation metrics (F1 score, Precision, and Recall) for the requested version, grouped by baseline metrics and adapter version.</td>
</tr>
<tr>
    <td><CopyableCode code="feature_types" /></td>
    <td><code>array</code></td>
    <td>List of the targeted feature types for the requested adapter version.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for your AWS Key Management Service key (AWS KMS key). Used to encrypt your documents. (pattern: &lt;code&gt;^&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,2048&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="output_config" /></td>
    <td><code>object</code></td>
    <td>Sets whether or not your output will go to a user created bucket. Used to set the name of the bucket, and the prefix on the output file. OutputConfig is an optional parameter which lets you adjust where your output will be placed. By default, Amazon Textract will store the results internally and can only be accessed by the Get API operations. With OutputConfig enabled, you can set the name of the bucket the output will be sent to the file prefix of the results where you can download your results. Additionally, you can set the KMSKeyID parameter to a customer master key (CMK) to encrypt your output. Without this parameter set Amazon Textract will encrypt server-side using the AWS managed CMK for Amazon S3. Decryption of Customer Content is necessary for processing of the documents by Amazon Textract. If your account is opted out under an AI services opt out policy then all unencrypted Customer Content is immediately and permanently deleted after the Customer Content has been processed by the service. No copy of of the output is retained by Amazon Textract. For information about how to opt out, see Managing AI services opt-out policy. For more information on data privacy, see the Data Privacy FAQ.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the adapter version that has been requested. (ACTIVE, AT_RISK, DEPRECATED, CREATION_ERROR, CREATION_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A message that describes the status of the requested adapter version. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\s!"\#\$%'&\(\)\*\+\,\-\./:;=\?@\&#91;\\\&#93;\^_`\&#123;\|\&#125;~&gt;&lt;&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A set of tags (key-value pairs) that are associated with the adapter version.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_adapter_versions">

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
    <td><CopyableCode code="adapter_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the adapter associated with a given adapter version.</td>
</tr>
<tr>
    <td><CopyableCode code="adapter_version" /></td>
    <td><code>string</code></td>
    <td>An identified for a given adapter version.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a given adapter version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="feature_types" /></td>
    <td><code>array</code></td>
    <td>The feature types that the adapter version is operating on.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Contains information on the status of a given adapter version. (ACTIVE, AT_RISK, DEPRECATED, CREATION_ERROR, CREATION_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A message explaining the status of a given adapter vesion. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\s!"\#\$%'&\(\)\*\+\,\-\./:;=\?@\&#91;\\\&#93;\^_`\&#123;\|\&#125;~&gt;&lt;&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#get_adapter_version"><CopyableCode code="get_adapter_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets configuration information for the specified adapter version, including: AdapterId, AdapterVersion, FeatureTypes, Status, StatusMessage, DatasetConfig, KMSKeyId, OutputConfig, Tags and EvaluationMetrics.</td>
</tr>
<tr>
    <td><a href="#list_adapter_versions"><CopyableCode code="list_adapter_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List all version of an adapter that meet the specified filtration criteria.</td>
</tr>
<tr>
    <td><a href="#create_adapter_version"><CopyableCode code="create_adapter_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AdapterId"><code>AdapterId</code></a>, <a href="#parameter-DatasetConfig"><code>DatasetConfig</code></a>, <a href="#parameter-OutputConfig"><code>OutputConfig</code></a></td>
    <td></td>
    <td>Creates a new version of an adapter. Operates on a provided AdapterId and a specified dataset provided via the DatasetConfig argument. Requires that you specify an Amazon S3 bucket with the OutputConfig argument. You can provide an optional KMSKeyId, an optional ClientRequestToken, and optional tags.</td>
</tr>
<tr>
    <td><a href="#delete_adapter_version"><CopyableCode code="delete_adapter_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Textract adapter version. Requires that you specify both an AdapterId and a AdapterVersion. Deletes the adapter version specified by the AdapterId and the AdapterVersion.</td>
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
    defaultValue="get_adapter_version"
    values={[
        { label: 'get_adapter_version', value: 'get_adapter_version' },
        { label: 'list_adapter_versions', value: 'list_adapter_versions' }
    ]}
>
<TabItem value="get_adapter_version">

Gets configuration information for the specified adapter version, including: AdapterId, AdapterVersion, FeatureTypes, Status, StatusMessage, DatasetConfig, KMSKeyId, OutputConfig, Tags and EvaluationMetrics.

```sql
SELECT
adapter_id,
adapter_version,
creation_time,
dataset_config,
evaluation_metrics,
feature_types,
kms_key_id,
output_config,
status,
status_message,
tags
FROM aws.textract.adapter_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_adapter_versions">

List all version of an adapter that meet the specified filtration criteria.

```sql
SELECT
adapter_id,
adapter_version,
creation_time,
feature_types,
status,
status_message
FROM aws.textract.adapter_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_adapter_version"
    values={[
        { label: 'create_adapter_version', value: 'create_adapter_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_adapter_version">

Creates a new version of an adapter. Operates on a provided AdapterId and a specified dataset provided via the DatasetConfig argument. Requires that you specify an Amazon S3 bucket with the OutputConfig argument. You can provide an optional KMSKeyId, an optional ClientRequestToken, and optional tags.

```sql
INSERT INTO aws.textract.adapter_versions (
AdapterId,
ClientRequestToken,
DatasetConfig,
KMSKeyId,
OutputConfig,
Tags,
region
)
SELECT 
'{{ AdapterId }}' /* required */,
'{{ ClientRequestToken }}',
'{{ DatasetConfig }}' /* required */,
'{{ KMSKeyId }}',
'{{ OutputConfig }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
adapter_id,
adapter_version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: adapter_versions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the adapter_versions resource.
    - name: AdapterId
      value: "{{ AdapterId }}"
      description: |
        A string containing a unique ID for the adapter that will receive a new version.
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        Idempotent token is used to recognize the request. If the same token is used with multiple CreateAdapterVersion requests, the same session is returned. This token is employed to avoid unintentionally creating the same session multiple times.
    - name: DatasetConfig
      description: |
        Specifies a dataset used to train a new adapter version. Takes a ManifestS3Object as the value.
      value:
        ManifestS3Object:
          Bucket: "{{ Bucket }}"
          Name: "{{ Name }}"
          Version: "{{ Version }}"
    - name: KMSKeyId
      value: "{{ KMSKeyId }}"
      description: |
        The identifier for your AWS Key Management Service key (AWS KMS key). Used to encrypt your documents.
    - name: OutputConfig
      description: |
        Sets whether or not your output will go to a user created bucket. Used to set the name of the bucket, and the prefix on the output file. OutputConfig is an optional parameter which lets you adjust where your output will be placed. By default, Amazon Textract will store the results internally and can only be accessed by the Get API operations. With OutputConfig enabled, you can set the name of the bucket the output will be sent to the file prefix of the results where you can download your results. Additionally, you can set the KMSKeyID parameter to a customer master key (CMK) to encrypt your output. Without this parameter set Amazon Textract will encrypt server-side using the AWS managed CMK for Amazon S3. Decryption of Customer Content is necessary for processing of the documents by Amazon Textract. If your account is opted out under an AI services opt out policy then all unencrypted Customer Content is immediately and permanently deleted after the Customer Content has been processed by the service. No copy of of the output is retained by Amazon Textract. For information about how to opt out, see Managing AI services opt-out policy. For more information on data privacy, see the Data Privacy FAQ.
      value:
        S3Bucket: "{{ S3Bucket }}"
        S3Prefix: "{{ S3Prefix }}"
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A set of tags (key-value pairs) that you want to attach to the adapter version.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_adapter_version"
    values={[
        { label: 'delete_adapter_version', value: 'delete_adapter_version' }
    ]}
>
<TabItem value="delete_adapter_version">

Deletes an Amazon Textract adapter version. Requires that you specify both an AdapterId and a AdapterVersion. Deletes the adapter version specified by the AdapterId and the AdapterVersion.

```sql
DELETE FROM aws.textract.adapter_versions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
