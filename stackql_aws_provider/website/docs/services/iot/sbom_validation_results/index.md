--- 
title: sbom_validation_results
hide_title: false
hide_table_of_contents: false
keywords:
  - sbom_validation_results
  - iot
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

Creates, updates, deletes, gets or lists a <code>sbom_validation_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sbom_validation_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.sbom_validation_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_sbom_validation_results"
    values={[
        { label: 'list_sbom_validation_results', value: 'list_sbom_validation_results' }
    ]}
>
<TabItem value="list_sbom_validation_results">

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
    <td>The errorCode representing the validation failure error if the SBOM validation failed. (INCOMPATIBLE_FORMAT, FILE_SIZE_LIMIT_EXCEEDED)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>The errorMessage representing the validation failure error if the SBOM validation failed.</td>
</tr>
<tr>
    <td><CopyableCode code="file_name" /></td>
    <td><code>string</code></td>
    <td>The name of the SBOM file.</td>
</tr>
<tr>
    <td><CopyableCode code="validation_result" /></td>
    <td><code>string</code></td>
    <td>The end result of the SBOM validation. (FAILED, SUCCEEDED)</td>
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
    <td><a href="#list_sbom_validation_results"><CopyableCode code="list_sbom_validation_results" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-version_name"><code>version_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-validationResult"><code>validationResult</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>The validation results for all software bill of materials (SBOM) attached to a specific software package version. Requires permission to access the ListSbomValidationResults action.</td>
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
<tr id="parameter-package_name">
    <td><CopyableCode code="package_name" /></td>
    <td><code>string</code></td>
    <td>The name of the new software package.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-version_name">
    <td><CopyableCode code="version_name" /></td>
    <td><code>string</code></td>
    <td>The name of the new package version.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that can be used to retrieve the next set of results, or null if there are no additional results.</td>
</tr>
<tr id="parameter-validationResult">
    <td><CopyableCode code="validationResult" /></td>
    <td><code>string</code></td>
    <td>The end result of the</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_sbom_validation_results"
    values={[
        { label: 'list_sbom_validation_results', value: 'list_sbom_validation_results' }
    ]}
>
<TabItem value="list_sbom_validation_results">

The validation results for all software bill of materials (SBOM) attached to a specific software package version. Requires permission to access the ListSbomValidationResults action.

```sql
SELECT
error_code,
error_message,
file_name,
validation_result
FROM aws.iot.sbom_validation_results
WHERE package_name = '{{ package_name }}' -- required
AND version_name = '{{ version_name }}' -- required
AND region = '{{ region }}' -- required
AND validationResult = '{{ validationResult }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
