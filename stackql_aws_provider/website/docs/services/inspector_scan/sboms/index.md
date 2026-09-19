--- 
title: sboms
hide_title: false
hide_table_of_contents: false
keywords:
  - sboms
  - inspector_scan
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

Creates, updates, deletes, gets or lists a <code>sboms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sboms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector_scan.sboms" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#scan_sbom"><CopyableCode code="scan_sbom" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sbom"><code>sbom</code></a></td>
    <td></td>
    <td>Scans a provided CycloneDX 1.5 SBOM and reports on any vulnerabilities discovered in that SBOM. You can generate compatible SBOMs for your resources using the Amazon Inspector SBOM generator. The output of this action reports NVD and CVSS scores when NVD and CVSS scores are available. Because the output reports both scores, you might notice a discrepency between them. However, you can triage the severity of either score depending on the vendor of your choosing.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="scan_sbom"
    values={[
        { label: 'scan_sbom', value: 'scan_sbom' }
    ]}
>
<TabItem value="scan_sbom">

Scans a provided CycloneDX 1.5 SBOM and reports on any vulnerabilities discovered in that SBOM. You can generate compatible SBOMs for your resources using the Amazon Inspector SBOM generator. The output of this action reports NVD and CVSS scores when NVD and CVSS scores are available. Because the output reports both scores, you might notice a discrepency between them. However, you can triage the severity of either score depending on the vendor of your choosing.

```sql
EXEC aws.inspector_scan.sboms.scan_sbom 
@region='{{ region }}' --required 
@@json=
'{
"sbom": "{{ sbom }}", 
"outputFormat": "{{ outputFormat }}"
}'
;
```
</TabItem>
</Tabs>
