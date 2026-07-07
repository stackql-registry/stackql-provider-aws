--- 
title: bill_of_materials_import_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - bill_of_materials_import_jobs
  - supplychain
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

Creates, updates, deletes, gets or lists a <code>bill_of_materials_import_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bill_of_materials_import_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.supplychain.bill_of_materials_import_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bill_of_materials_import_job"
    values={[
        { label: 'get_bill_of_materials_import_job', value: 'get_bill_of_materials_import_job' }
    ]}
>
<TabItem value="get_bill_of_materials_import_job">

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
    <td><CopyableCode code="instanceId" /></td>
    <td><code>string</code></td>
    <td>The BillOfMaterialsImportJob instanceId. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="jobId" /></td>
    <td><code>string</code></td>
    <td>The BillOfMaterialsImportJob jobId. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>When the BillOfMaterialsImportJob has reached a terminal state, there will be a message.</td>
</tr>
<tr>
    <td><CopyableCode code="s3uri" /></td>
    <td><code>string</code></td>
    <td>The S3 URI from which the CSV is read. (pattern: &lt;code&gt;&#91;sS&#93;3:​//&#91;a-z0-9&#93;&#91;a-z0-9.-&#93;&#123;1,61&#125;&#91;a-z0-9&#93;/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The BillOfMaterialsImportJob ConfigurationJobStatus. (NEW, FAILED, IN_PROGRESS, QUEUED, SUCCESS)</td>
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
    <td><a href="#get_bill_of_materials_import_job"><CopyableCode code="get_bill_of_materials_import_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get status and details of a BillOfMaterialsImportJob.</td>
</tr>
<tr>
    <td><a href="#create_bill_of_materials_import_job"><CopyableCode code="create_bill_of_materials_import_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-s3uri"><code>s3uri</code></a></td>
    <td></td>
    <td>CreateBillOfMaterialsImportJob creates an import job for the Product Bill Of Materials (BOM) entity. For information on the product_bom entity, see the AWS Supply Chain User Guide. The CSV file must be located in an Amazon S3 location accessible to AWS Supply Chain. It is recommended to use the same Amazon S3 bucket created during your AWS Supply Chain instance creation.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The AWS Supply Chain instance identifier.</td>
</tr>
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The BillOfMaterialsImportJob identifier.</td>
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
    defaultValue="get_bill_of_materials_import_job"
    values={[
        { label: 'get_bill_of_materials_import_job', value: 'get_bill_of_materials_import_job' }
    ]}
>
<TabItem value="get_bill_of_materials_import_job">

Get status and details of a BillOfMaterialsImportJob.

```sql
SELECT
instanceId,
jobId,
message,
s3uri,
status
FROM aws.supplychain.bill_of_materials_import_jobs
WHERE instance_id = '{{ instance_id }}' -- required
AND job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_bill_of_materials_import_job"
    values={[
        { label: 'create_bill_of_materials_import_job', value: 'create_bill_of_materials_import_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_bill_of_materials_import_job">

CreateBillOfMaterialsImportJob creates an import job for the Product Bill Of Materials (BOM) entity. For information on the product_bom entity, see the AWS Supply Chain User Guide. The CSV file must be located in an Amazon S3 location accessible to AWS Supply Chain. It is recommended to use the same Amazon S3 bucket created during your AWS Supply Chain instance creation.

```sql
INSERT INTO aws.supplychain.bill_of_materials_import_jobs (
s3uri,
clientToken,
instance_id,
region
)
SELECT 
'{{ s3uri }}' /* required */,
'{{ clientToken }}',
'{{ instance_id }}',
'{{ region }}'
RETURNING
jobId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: bill_of_materials_import_jobs
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the bill_of_materials_import_jobs resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the bill_of_materials_import_jobs resource.
    - name: s3uri
      value: "{{ s3uri }}"
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
`}</CodeBlock>

</TabItem>
</Tabs>
