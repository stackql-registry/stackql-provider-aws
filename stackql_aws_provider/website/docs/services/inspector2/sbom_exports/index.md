--- 
title: sbom_exports
hide_title: false
hide_table_of_contents: false
keywords:
  - sbom_exports
  - inspector2
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

Creates, updates, deletes, gets or lists a <code>sbom_exports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sbom_exports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.sbom_exports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sbom_export"
    values={[
        { label: 'get_sbom_export', value: 'get_sbom_export' }
    ]}
>
<TabItem value="get_sbom_export">

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
    <td><CopyableCode code="error_code" /></td>
    <td><code>string</code></td>
    <td>An error code. (INTERNAL_ERROR, INVALID_PERMISSIONS, NO_FINDINGS_FOUND, BUCKET_NOT_FOUND, INCOMPATIBLE_BUCKET_REGION, MALFORMED_KMS_KEY)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>An error message.</td>
</tr>
<tr>
    <td><CopyableCode code="filter_criteria" /></td>
    <td><code>object</code></td>
    <td>The resource filter criteria for a Software bill of materials (SBOM) report.</td>
</tr>
<tr>
    <td><CopyableCode code="format_" /></td>
    <td><code>string</code></td>
    <td>The format of the software bill of materials (SBOM) report. (CYCLONEDX_1_4, SPDX_2_3)</td>
</tr>
<tr>
    <td><CopyableCode code="report_id" /></td>
    <td><code>string</code></td>
    <td>The report ID of the software bill of materials (SBOM) report. (pattern: &lt;code&gt;.*\b&#91;a-f0-9&#93;&#123;8&#125;\b-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-\b&#91;a-f0-9&#93;&#123;12&#125;\b.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="s_3_destination" /></td>
    <td><code>object</code></td>
    <td>Contains details of the Amazon S3 bucket and KMS key used to export findings.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the software bill of materials (SBOM) report. (SUCCEEDED, IN_PROGRESS, CANCELLED, FAILED)</td>
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
    <td><a href="#get_sbom_export"><CopyableCode code="get_sbom_export" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details of a software bill of materials (SBOM) report.</td>
</tr>
<tr>
    <td><a href="#create_sbom_export"><CopyableCode code="create_sbom_export" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-reportFormat"><code>reportFormat</code></a>, <a href="#parameter-s3Destination"><code>s3Destination</code></a></td>
    <td></td>
    <td>Creates a software bill of materials (SBOM) report.</td>
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
    defaultValue="get_sbom_export"
    values={[
        { label: 'get_sbom_export', value: 'get_sbom_export' }
    ]}
>
<TabItem value="get_sbom_export">

Gets details of a software bill of materials (SBOM) report.

```sql
SELECT
error_code,
error_message,
filter_criteria,
format_,
report_id,
s_3_destination,
status
FROM aws.inspector2.sbom_exports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_sbom_export"
    values={[
        { label: 'create_sbom_export', value: 'create_sbom_export' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_sbom_export">

Creates a software bill of materials (SBOM) report.

```sql
INSERT INTO aws.inspector2.sbom_exports (
resourceFilterCriteria,
reportFormat,
s3Destination,
region
)
SELECT 
'{{ resourceFilterCriteria }}',
'{{ reportFormat }}' /* required */,
'{{ s3Destination }}' /* required */,
'{{ region }}'
RETURNING
report_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sbom_exports
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the sbom_exports resource.
    - name: resourceFilterCriteria
      description: |
        The resource filter criteria for a Software bill of materials (SBOM) report.
      value:
        accountId:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        resourceId:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        resourceType:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        ecrRepositoryName:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        lambdaFunctionName:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        ecrImageTags:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        ec2InstanceTags:
          - comparison: "{{ comparison }}"
            key: "{{ key }}"
            value: "{{ value }}"
        lambdaFunctionTags:
          - comparison: "{{ comparison }}"
            key: "{{ key }}"
            value: "{{ value }}"
        cloudProvider:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        cloudProviderAccountId:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        cloudProviderOrgId:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        cloudProviderRegion:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        cloudVmInstanceTags:
          - comparison: "{{ comparison }}"
            key: "{{ key }}"
            value: "{{ value }}"
        cloudContainerImageTags:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        cloudContainerRepositoryName:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        cloudContainerRegistryName:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        cloudServerlessFunctionName:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        cloudServerlessFunctionRuntime:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        cloudServerlessFunctionTags:
          - comparison: "{{ comparison }}"
            key: "{{ key }}"
            value: "{{ value }}"
    - name: reportFormat
      value: "{{ reportFormat }}"
      valid_values: ['CYCLONEDX_1_4', 'SPDX_2_3']
    - name: s3Destination
      description: |
        Contains details of the Amazon S3 bucket and KMS key used to export findings.
      value:
        bucketName: "{{ bucketName }}"
        keyPrefix: "{{ keyPrefix }}"
        kmsKeyArn: "{{ kmsKeyArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>
