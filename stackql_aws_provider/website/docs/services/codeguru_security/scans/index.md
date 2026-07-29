--- 
title: scans
hide_title: false
hide_table_of_contents: false
keywords:
  - scans
  - codeguru_security
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

Creates, updates, deletes, gets or lists a <code>scans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeguru_security.scans" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_scan"
    values={[
        { label: 'get_scan', value: 'get_scan' },
        { label: 'list_scans', value: 'list_scans' }
    ]}
>
<TabItem value="get_scan">

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
    <td><CopyableCode code="analysis_type" /></td>
    <td><code>string</code></td>
    <td>The type of analysis CodeGuru Security performed in the scan, either Security or All. The Security type only generates findings related to security. The All type generates both security findings and quality findings. (Security, All)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the scan was created.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>Details about the error that causes a scan to fail to be retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_revisions" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of times a scan has been re-run on a revised resource.</td>
</tr>
<tr>
    <td><CopyableCode code="run_id" /></td>
    <td><code>string</code></td>
    <td>UUID that identifies the individual scan run. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scan_name" /></td>
    <td><code>string</code></td>
    <td>The name of the scan. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_$:.&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scan_name_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the scan name. (pattern: &lt;code&gt;arn:aws:codeguru-security:&#91;\S&#93;+:&#91;\d&#93;&#123;12&#125;:scans\/&#91;a-zA-Z0-9-_$:.&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scan_state" /></td>
    <td><code>string</code></td>
    <td>The current state of the scan. Returns either InProgress, Successful, or Failed. (InProgress, Successful, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the scan was last updated. Only available for STANDARD scan types.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_scans">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the scan was created.</td>
</tr>
<tr>
    <td><CopyableCode code="run_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the scan run. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scan_name" /></td>
    <td><code>string</code></td>
    <td>The name of the scan. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_$:.&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scan_name_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the scan name. (pattern: &lt;code&gt;arn:aws:codeguru-security:&#91;\S&#93;+:&#91;\d&#93;&#123;12&#125;:scans\/&#91;a-zA-Z0-9-_$:.&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scan_state" /></td>
    <td><code>string</code></td>
    <td>The state of the scan. A scan can be In Progress, Complete, or Failed. (InProgress, Successful, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the scan was last updated. A scan is updated when it is re-run.</td>
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
    <td><a href="#get_scan"><CopyableCode code="get_scan" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-scan_name"><code>scan_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-runId"><code>runId</code></a></td>
    <td>Returns details about a scan, including whether or not a scan has completed.</td>
</tr>
<tr>
    <td><a href="#list_scans"><CopyableCode code="list_scans" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of all scans in an account. Does not return EXPRESS scans.</td>
</tr>
<tr>
    <td><a href="#create_scan"><CopyableCode code="create_scan" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceId"><code>resourceId</code></a>, <a href="#parameter-scanName"><code>scanName</code></a></td>
    <td></td>
    <td>Use to create a scan using code uploaded to an Amazon S3 bucket.</td>
</tr>
<tr>
    <td><a href="#create_upload_url"><CopyableCode code="create_upload_url" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-scanName"><code>scanName</code></a></td>
    <td></td>
    <td>Generates a pre-signed URL, request headers used to upload a code resource, and code artifact identifier for the uploaded resource. You can upload your code resource to the URL with the request headers using any HTTP client.</td>
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
<tr id="parameter-scan_name">
    <td><CopyableCode code="scan_name" /></td>
    <td><code>string</code></td>
    <td>The name of the scan you want to view details about.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response. Use this parameter when paginating results. If additional results exist beyond the number you specify, the nextToken element is returned in the response. Use nextToken in a subsequent request to retrieve additional results. If not specified, returns 100 results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request to continue listing results after the first page.</td>
</tr>
<tr id="parameter-runId">
    <td><CopyableCode code="runId" /></td>
    <td><code>string</code></td>
    <td>UUID that identifies the individual scan run you want to view details about. You retrieve this when you call the CreateScan operation. Defaults to the latest scan run if missing.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_scan"
    values={[
        { label: 'get_scan', value: 'get_scan' },
        { label: 'list_scans', value: 'list_scans' }
    ]}
>
<TabItem value="get_scan">

Returns details about a scan, including whether or not a scan has completed.

```sql
SELECT
analysis_type,
created_at,
error_message,
number_of_revisions,
run_id,
scan_name,
scan_name_arn,
scan_state,
updated_at
FROM aws.codeguru_security.scans
WHERE scan_name = '{{ scan_name }}' -- required
AND region = '{{ region }}' -- required
AND runId = '{{ runId }}'
;
```
</TabItem>
<TabItem value="list_scans">

Returns a list of all scans in an account. Does not return EXPRESS scans.

```sql
SELECT
created_at,
run_id,
scan_name,
scan_name_arn,
scan_state,
updated_at
FROM aws.codeguru_security.scans
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_scan"
    values={[
        { label: 'create_scan', value: 'create_scan' },
        { label: 'create_upload_url', value: 'create_upload_url' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_scan">

Use to create a scan using code uploaded to an Amazon S3 bucket.

```sql
INSERT INTO aws.codeguru_security.scans (
clientToken,
resourceId,
scanName,
scanType,
analysisType,
tags,
region
)
SELECT 
'{{ clientToken }}',
'{{ resourceId }}' /* required */,
'{{ scanName }}' /* required */,
'{{ scanType }}',
'{{ analysisType }}',
'{{ tags }}',
'{{ region }}'
RETURNING
resource_id,
run_id,
scan_name,
scan_name_arn,
scan_state
;
```
</TabItem>
<TabItem value="create_upload_url">

Generates a pre-signed URL, request headers used to upload a code resource, and code artifact identifier for the uploaded resource. You can upload your code resource to the URL with the request headers using any HTTP client.

```sql
INSERT INTO aws.codeguru_security.scans (
scanName,
region
)
SELECT 
'{{ scanName }}' /* required */,
'{{ region }}'
RETURNING
code_artifact_id,
request_headers,
s_3_url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: scans
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the scans resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: resourceId
      description: |
        The identifier for a resource object that contains resources to scan. Specifying a codeArtifactId is required to create a scan.
      value:
        codeArtifactId: "{{ codeArtifactId }}"
    - name: scanName
      value: "{{ scanName }}"
    - name: scanType
      value: "{{ scanType }}"
      valid_values: ['Standard', 'Express']
    - name: analysisType
      value: "{{ analysisType }}"
      valid_values: ['Security', 'All']
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>
