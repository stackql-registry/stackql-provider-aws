--- 
title: certificate_domain_validations
hide_title: false
hide_table_of_contents: false
keywords:
  - certificate_domain_validations
  - acm
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

Creates, updates, deletes, gets or lists a <code>certificate_domain_validations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="certificate_domain_validations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.acm.certificate_domain_validations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_certificate_domain_validations"
    values={[
        { label: 'list_certificate_domain_validations', value: 'list_certificate_domain_validations' }
    ]}
>
<TabItem value="list_certificate_domain_validations">

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
    <td><CopyableCode code="active_validation_configuration" /></td>
    <td><code>object</code></td>
    <td>The validation configuration currently in effect for this domain. This reflects the validation method that ACM is currently using to validate domain ownership (for example, email or DNS).</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The fully qualified domain name (FQDN) in the certificate for which this validation summary applies. (pattern: &lt;code&gt;(\*\.)?(((?!-)&#91;A-Za-z0-9-&#93;&#123;0,62&#125;&#91;A-Za-z0-9&#93;)\.)+((?!-)&#91;A-Za-z0-9-&#93;&#123;1,62&#125;&#91;A-Za-z0-9&#93;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="requested_validation_configuration" /></td>
    <td><code>object</code></td>
    <td>The validation configuration for a pending validation method migration. This field is present only when a migration is in progress (for example, from email to DNS validation). It contains the target validation method, the current validation status, and the validation challenge details (such as the CNAME record to add to your DNS configuration).</td>
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
    <td><a href="#list_certificate_domain_validations"><CopyableCode code="list_certificate_domain_validations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns per-domain validation summaries for an ACM certificate. Each summary includes the domain name, the active validation configuration, and the requested validation configuration when a validation method migration is in progress. You can use the results to monitor the progress of an email-to-DNS validation migration and to retrieve the CNAME records required for DNS validation.</td>
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
    defaultValue="list_certificate_domain_validations"
    values={[
        { label: 'list_certificate_domain_validations', value: 'list_certificate_domain_validations' }
    ]}
>
<TabItem value="list_certificate_domain_validations">

Returns per-domain validation summaries for an ACM certificate. Each summary includes the domain name, the active validation configuration, and the requested validation configuration when a validation method migration is in progress. You can use the results to monitor the progress of an email-to-DNS validation migration and to retrieve the CNAME records required for DNS validation.

```sql
SELECT
active_validation_configuration,
domain_name,
requested_validation_configuration
FROM aws.acm.certificate_domain_validations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
