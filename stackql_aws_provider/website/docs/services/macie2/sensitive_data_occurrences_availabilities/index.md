--- 
title: sensitive_data_occurrences_availabilities
hide_title: false
hide_table_of_contents: false
keywords:
  - sensitive_data_occurrences_availabilities
  - macie2
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

Creates, updates, deletes, gets or lists a <code>sensitive_data_occurrences_availabilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sensitive_data_occurrences_availabilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.macie2.sensitive_data_occurrences_availabilities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sensitive_data_occurrences_availability"
    values={[
        { label: 'get_sensitive_data_occurrences_availability', value: 'get_sensitive_data_occurrences_availability' }
    ]}
>
<TabItem value="get_sensitive_data_occurrences_availability">

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
    <td><CopyableCode code="code" /></td>
    <td><code>string</code></td>
    <td>Specifies whether occurrences of sensitive data can be retrieved for the finding. Possible values are: AVAILABLE, the sensitive data can be retrieved; and, UNAVAILABLE, the sensitive data can't be retrieved. If this value is UNAVAILABLE, the reasons array indicates why the data can't be retrieved. (AVAILABLE, UNAVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="reasons" /></td>
    <td><code>array</code></td>
    <td>Specifies why occurrences of sensitive data can't be retrieved for the finding. Possible values are: ACCOUNT_NOT_IN_ORGANIZATION - The affected account isn't currently part of your organization. Or the account is part of your organization but Macie isn't currently enabled for the account. You're not allowed to access the affected S3 object by using Macie. INVALID_CLASSIFICATION_RESULT - There isn't a corresponding sensitive data discovery result for the finding. Or the corresponding sensitive data discovery result isn't available in the current Amazon Web Services Region, is malformed or corrupted, or uses an unsupported storage format. Macie can't verify the location of the sensitive data to retrieve. INVALID_RESULT_SIGNATURE - The corresponding sensitive data discovery result is stored in an S3 object that wasn't signed by Macie. Macie can't verify the integrity and authenticity of the sensitive data discovery result. Therefore, Macie can't verify the location of the sensitive data to retrieve. MEMBER_ROLE_TOO_PERMISSIVE - The trust or permissions policy for the IAM role in the affected member account doesn't meet Macie requirements for restricting access to the role. Or the role's trust policy doesn't specify the correct external ID for your organization. Macie can't assume the role to retrieve the sensitive data. MISSING_GET_MEMBER_PERMISSION - You're not allowed to retrieve information about the association between your account and the affected account. Macie can't determine whether you’re allowed to access the affected S3 object as the delegated Macie administrator for the affected account. OBJECT_EXCEEDS_SIZE_QUOTA - The storage size of the affected S3 object exceeds the size quota for retrieving occurrences of sensitive data from this type of file. OBJECT_UNAVAILABLE - The affected S3 object isn't available. The object was renamed, moved, deleted, or changed after Macie created the finding. Or the object is encrypted with an KMS key that isn’t available. For example, the key is disabled, is scheduled for deletion, or was deleted. RESULT_NOT_SIGNED - The corresponding sensitive data discovery result is stored in an S3 object that hasn't been signed. Macie can't verify the integrity and authenticity of the sensitive data discovery result. Therefore, Macie can't verify the location of the sensitive data to retrieve. ROLE_TOO_PERMISSIVE - Your account is configured to retrieve occurrences of sensitive data by using an IAM role whose trust or permissions policy doesn't meet Macie requirements for restricting access to the role. Macie can’t assume the role to retrieve the sensitive data. UNSUPPORTED_FINDING_TYPE - The specified finding isn't a sensitive data finding. UNSUPPORTED_OBJECT_TYPE - The affected S3 object uses a file or storage format that Macie doesn't support for retrieving occurrences of sensitive data. This value is null if sensitive data can be retrieved for the finding.</td>
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
    <td><a href="#get_sensitive_data_occurrences_availability"><CopyableCode code="get_sensitive_data_occurrences_availability" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-finding_id"><code>finding_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Checks whether occurrences of sensitive data can be retrieved for a finding.</td>
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
<tr id="parameter-finding_id">
    <td><CopyableCode code="finding_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the finding.</td>
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
    defaultValue="get_sensitive_data_occurrences_availability"
    values={[
        { label: 'get_sensitive_data_occurrences_availability', value: 'get_sensitive_data_occurrences_availability' }
    ]}
>
<TabItem value="get_sensitive_data_occurrences_availability">

Checks whether occurrences of sensitive data can be retrieved for a finding.

```sql
SELECT
code,
reasons
FROM aws.macie2.sensitive_data_occurrences_availabilities
WHERE finding_id = '{{ finding_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
