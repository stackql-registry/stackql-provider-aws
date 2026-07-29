--- 
title: signing_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - signing_profiles
  - signer
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

Creates, updates, deletes, gets or lists a <code>signing_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="signing_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.signer.signing_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_signing_profile"
    values={[
        { label: 'get_signing_profile', value: 'get_signing_profile' },
        { label: 'list_signing_profiles', value: 'list_signing_profiles' }
    ]}
>
<TabItem value="get_signing_profile">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the signing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="overrides" /></td>
    <td><code>object</code></td>
    <td>A list of overrides applied by the target signing profile for signing operations.</td>
</tr>
<tr>
    <td><CopyableCode code="platform_display_name" /></td>
    <td><code>string</code></td>
    <td>A human-readable name for the signing platform associated with the signing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="platform_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the platform that is used by the target signing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_name" /></td>
    <td><code>string</code></td>
    <td>The name of the target signing profile. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_&#93;&#123;2,&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="profile_version" /></td>
    <td><code>string</code></td>
    <td>The current version of the signing profile. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="profile_version_arn" /></td>
    <td><code>string</code></td>
    <td>The signing profile ARN, including the profile version.</td>
</tr>
<tr>
    <td><CopyableCode code="revocation_record" /></td>
    <td><code>object</code></td>
    <td>Revocation information for a signing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="signature_validity_period" /></td>
    <td><code>object</code></td>
    <td>The validity period for a signing job.</td>
</tr>
<tr>
    <td><CopyableCode code="signing_material" /></td>
    <td><code>object</code></td>
    <td>The ARN of the certificate that the target profile uses for signing operations.</td>
</tr>
<tr>
    <td><CopyableCode code="signing_parameters" /></td>
    <td><code>object</code></td>
    <td>A map of key-value pairs for signing operations that is attached to the target signing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the target signing profile. (Active, Canceled, Revoked)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Reason for the status of the target signing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A list of tags associated with the signing profile.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_signing_profiles">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the signing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="platform_display_name" /></td>
    <td><code>string</code></td>
    <td>The name of the signing platform.</td>
</tr>
<tr>
    <td><CopyableCode code="platform_id" /></td>
    <td><code>string</code></td>
    <td>The ID of a platform that is available for use by a signing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_name" /></td>
    <td><code>string</code></td>
    <td>The name of the signing profile. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_&#93;&#123;2,&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="profile_version" /></td>
    <td><code>string</code></td>
    <td>The version of a signing profile. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="profile_version_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a signing profile, including the profile version.</td>
</tr>
<tr>
    <td><CopyableCode code="signature_validity_period" /></td>
    <td><code>object</code></td>
    <td>The validity period for a signing job.</td>
</tr>
<tr>
    <td><CopyableCode code="signing_material" /></td>
    <td><code>object</code></td>
    <td>The ACM certificate that is used to sign your code.</td>
</tr>
<tr>
    <td><CopyableCode code="signing_parameters" /></td>
    <td><code>object</code></td>
    <td>The parameters that are available for use by a Signer user.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a signing profile. (Active, Canceled, Revoked)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A list of tags associated with the signing profile.</td>
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
    <td><a href="#get_signing_profile"><CopyableCode code="get_signing_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-profile_name"><code>profile_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-profileOwner"><code>profileOwner</code></a></td>
    <td>Returns information on a specific signing profile.</td>
</tr>
<tr>
    <td><a href="#list_signing_profiles"><CopyableCode code="list_signing_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-includeCanceled"><code>includeCanceled</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-platformId"><code>platformId</code></a>, <a href="#parameter-statuses"><code>statuses</code></a></td>
    <td>Lists all available signing profiles in your AWS account. Returns only profiles with an ACTIVE status unless the includeCanceled request field is set to true. If additional jobs remain to be listed, AWS Signer returns a nextToken value. Use this value in subsequent calls to ListSigningJobs to fetch the remaining values. You can continue calling ListSigningJobs with your maxResults parameter and with new values that Signer returns in the nextToken parameter until all of your signing jobs have been returned.</td>
</tr>
<tr>
    <td><a href="#revoke_signing_profile"><CopyableCode code="revoke_signing_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-profile_name"><code>profile_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-profileVersion"><code>profileVersion</code></a>, <a href="#parameter-reason"><code>reason</code></a>, <a href="#parameter-effectiveTime"><code>effectiveTime</code></a></td>
    <td></td>
    <td>Changes the state of a signing profile to REVOKED. This indicates that signatures generated using the signing profile after an effective start date are no longer valid. A revoked profile is still viewable with the ListSigningProfiles operation, but it cannot perform new signing jobs. See Data Retention for more information on scheduled deletion of a revoked signing profile.</td>
</tr>
<tr>
    <td><a href="#put_signing_profile"><CopyableCode code="put_signing_profile" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-profile_name"><code>profile_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-platformId"><code>platformId</code></a></td>
    <td></td>
    <td>Creates a signing profile. A signing profile is a code-signing template that can be used to carry out a pre-defined signing job.</td>
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
<tr id="parameter-profile_name">
    <td><CopyableCode code="profile_name" /></td>
    <td><code>string</code></td>
    <td>The name of the signing profile to be created.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-includeCanceled">
    <td><CopyableCode code="includeCanceled" /></td>
    <td><code>boolean</code></td>
    <td>Designates whether to include profiles with the status of CANCELED.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of profiles to be returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Value for specifying the next set of paginated results to return. After you receive a response with truncated results, use this parameter in a subsequent request. Set it to the value of nextToken from the response that you just received.</td>
</tr>
<tr id="parameter-platformId">
    <td><CopyableCode code="platformId" /></td>
    <td><code>string</code></td>
    <td>Filters results to return only signing jobs initiated for a specified signing platform.</td>
</tr>
<tr id="parameter-profileOwner">
    <td><CopyableCode code="profileOwner" /></td>
    <td><code>string</code></td>
    <td>The AWS account ID of the profile owner.</td>
</tr>
<tr id="parameter-statuses">
    <td><CopyableCode code="statuses" /></td>
    <td><code>array</code></td>
    <td>Filters results to return only signing jobs with statuses in the specified list.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_signing_profile"
    values={[
        { label: 'get_signing_profile', value: 'get_signing_profile' },
        { label: 'list_signing_profiles', value: 'list_signing_profiles' }
    ]}
>
<TabItem value="get_signing_profile">

Returns information on a specific signing profile.

```sql
SELECT
arn,
overrides,
platform_display_name,
platform_id,
profile_name,
profile_version,
profile_version_arn,
revocation_record,
signature_validity_period,
signing_material,
signing_parameters,
status,
status_reason,
tags
FROM aws.signer.signing_profiles
WHERE profile_name = '{{ profile_name }}' -- required
AND region = '{{ region }}' -- required
AND profileOwner = '{{ profileOwner }}'
;
```
</TabItem>
<TabItem value="list_signing_profiles">

Lists all available signing profiles in your AWS account. Returns only profiles with an ACTIVE status unless the includeCanceled request field is set to true. If additional jobs remain to be listed, AWS Signer returns a nextToken value. Use this value in subsequent calls to ListSigningJobs to fetch the remaining values. You can continue calling ListSigningJobs with your maxResults parameter and with new values that Signer returns in the nextToken parameter until all of your signing jobs have been returned.

```sql
SELECT
arn,
platform_display_name,
platform_id,
profile_name,
profile_version,
profile_version_arn,
signature_validity_period,
signing_material,
signing_parameters,
status,
tags
FROM aws.signer.signing_profiles
WHERE region = '{{ region }}' -- required
AND includeCanceled = '{{ includeCanceled }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND platformId = '{{ platformId }}'
AND statuses = '{{ statuses }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="revoke_signing_profile"
    values={[
        { label: 'revoke_signing_profile', value: 'revoke_signing_profile' }
    ]}
>
<TabItem value="revoke_signing_profile">

Changes the state of a signing profile to REVOKED. This indicates that signatures generated using the signing profile after an effective start date are no longer valid. A revoked profile is still viewable with the ListSigningProfiles operation, but it cannot perform new signing jobs. See Data Retention for more information on scheduled deletion of a revoked signing profile.

```sql
UPDATE aws.signer.signing_profiles
SET 
profileVersion = '{{ profileVersion }}',
reason = '{{ reason }}',
effectiveTime = '{{ effectiveTime }}'
WHERE 
profile_name = '{{ profile_name }}' --required
AND region = '{{ region }}' --required
AND profileVersion = '{{ profileVersion }}' --required
AND reason = '{{ reason }}' --required
AND effectiveTime = '{{ effectiveTime }}' --required;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_signing_profile"
    values={[
        { label: 'put_signing_profile', value: 'put_signing_profile' }
    ]}
>
<TabItem value="put_signing_profile">

Creates a signing profile. A signing profile is a code-signing template that can be used to carry out a pre-defined signing job.

```sql
REPLACE aws.signer.signing_profiles
SET 
signingMaterial = '{{ signingMaterial }}',
signatureValidityPeriod = '{{ signatureValidityPeriod }}',
platformId = '{{ platformId }}',
overrides = '{{ overrides }}',
signingParameters = '{{ signingParameters }}',
tags = '{{ tags }}'
WHERE 
profile_name = '{{ profile_name }}' --required
AND region = '{{ region }}' --required
AND platformId = '{{ platformId }}' --required
RETURNING
arn,
profile_version,
profile_version_arn;
```
</TabItem>
</Tabs>
