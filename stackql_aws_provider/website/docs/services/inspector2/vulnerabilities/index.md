--- 
title: vulnerabilities
hide_title: false
hide_table_of_contents: false
keywords:
  - vulnerabilities
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

Creates, updates, deletes, gets or lists a <code>vulnerabilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vulnerabilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.vulnerabilities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_vulnerabilities"
    values={[
        { label: 'search_vulnerabilities', value: 'search_vulnerabilities' }
    ]}
>
<TabItem value="search_vulnerabilities">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID for the specific vulnerability.</td>
</tr>
<tr>
    <td><CopyableCode code="atig_data" /></td>
    <td><code>object</code></td>
    <td>An object that contains information about the Amazon Web Services Threat Intel Group (ATIG) details for the vulnerability.</td>
</tr>
<tr>
    <td><CopyableCode code="cisa_data" /></td>
    <td><code>object</code></td>
    <td>An object that contains the Cybersecurity and Infrastructure Security Agency (CISA) details for the vulnerability.</td>
</tr>
<tr>
    <td><CopyableCode code="cvss_2" /></td>
    <td><code>object</code></td>
    <td>An object that contains the Common Vulnerability Scoring System (CVSS) Version 2 details for the vulnerability.</td>
</tr>
<tr>
    <td><CopyableCode code="cvss_3" /></td>
    <td><code>object</code></td>
    <td>An object that contains the Common Vulnerability Scoring System (CVSS) Version 3 details for the vulnerability.</td>
</tr>
<tr>
    <td><CopyableCode code="cvss_4" /></td>
    <td><code>object</code></td>
    <td>An object that contains the Common Vulnerability Scoring System (CVSS) Version 4 details for the vulnerability.</td>
</tr>
<tr>
    <td><CopyableCode code="cwes" /></td>
    <td><code>array</code></td>
    <td>The Common Weakness Enumeration (CWE) associated with the vulnerability.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the vulnerability.</td>
</tr>
<tr>
    <td><CopyableCode code="detection_platforms" /></td>
    <td><code>array</code></td>
    <td>Platforms that the vulnerability can be detected on.</td>
</tr>
<tr>
    <td><CopyableCode code="epss" /></td>
    <td><code>object</code></td>
    <td>An object that contains the Exploit Prediction Scoring System (EPSS) score for a vulnerability.</td>
</tr>
<tr>
    <td><CopyableCode code="exploit_observed" /></td>
    <td><code>object</code></td>
    <td>An object that contains details on when the exploit was observed.</td>
</tr>
<tr>
    <td><CopyableCode code="reference_urls" /></td>
    <td><code>array</code></td>
    <td>Links to various resources with more information on this vulnerability.</td>
</tr>
<tr>
    <td><CopyableCode code="related_vulnerabilities" /></td>
    <td><code>array</code></td>
    <td>A list of related vulnerabilities.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The source of the vulnerability information. Possible results are RHEL, AMAZON_CVE, DEBIAN or NVD. (NVD)</td>
</tr>
<tr>
    <td><CopyableCode code="source_url" /></td>
    <td><code>string</code></td>
    <td>A link to the official source material for this vulnerability.</td>
</tr>
<tr>
    <td><CopyableCode code="vendor_created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the vendor created this vulnerability.</td>
</tr>
<tr>
    <td><CopyableCode code="vendor_severity" /></td>
    <td><code>string</code></td>
    <td>The severity assigned by the vendor.</td>
</tr>
<tr>
    <td><CopyableCode code="vendor_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the vendor last updated this vulnerability.</td>
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
    <td><a href="#search_vulnerabilities"><CopyableCode code="search_vulnerabilities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists Amazon Inspector coverage details for a specific vulnerability.</td>
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
    defaultValue="search_vulnerabilities"
    values={[
        { label: 'search_vulnerabilities', value: 'search_vulnerabilities' }
    ]}
>
<TabItem value="search_vulnerabilities">

Lists Amazon Inspector coverage details for a specific vulnerability.

```sql
SELECT
id,
atig_data,
cisa_data,
cvss_2,
cvss_3,
cvss_4,
cwes,
description,
detection_platforms,
epss,
exploit_observed,
reference_urls,
related_vulnerabilities,
source,
source_url,
vendor_created_at,
vendor_severity,
vendor_updated_at
FROM aws.inspector2.vulnerabilities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
